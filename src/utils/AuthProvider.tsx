import React, { Component } from 'react'
import {
  fetchMsGraph,
  GRAPH_ENDPOINTS,
  GRAPH_REQUESTS,
  GRAPH_SCOPES,
  //   isIE,
  msalApp,
  requiresInteraction,
} from './auth-utils'

// If you support IE, our recommendation is that you sign-in using Redirect APIs
// const useRedirectFlow = isIE();
const useRedirectFlow = true

export default (C: any) =>
  class AuthProvider extends Component<any, any> {
    constructor(props: any) {
      super(props)

      this.state = {
        account: null,
        error: null,
        emailMessages: null,
        graphProfile: null,
      }
    }

    public async acquireToken(request: any, redirect?: any) {
      return msalApp.acquireTokenSilent(request).catch((error): any => {
        // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure
        // due to consent or interaction required ONLY
        if (requiresInteraction(error.errorCode)) {
          return redirect
            ? msalApp.acquireTokenRedirect(request)
            : msalApp.acquireTokenPopup(request)
        }
        // tslint:disable-next-line: no-console
        console.error('Non-interactive error:', error.errorCode)
      })
    }

    public async onSignIn(redirect: any) {
      if (redirect) {
        return msalApp.loginRedirect(GRAPH_REQUESTS.LOGIN)
      }

      const loginResponse = await msalApp.loginPopup(GRAPH_REQUESTS.LOGIN).catch(error => {
        this.setState({
          error: error.message,
        })
      })

      if (loginResponse) {
        this.setState({
          account: loginResponse.account,
          error: null,
        })

        const tokenResponse = await this.acquireToken(GRAPH_REQUESTS.LOGIN).catch(error => {
          this.setState({
            error: error.message,
          })
        })

        if (tokenResponse) {
          const graphProfile = await fetchMsGraph(
            GRAPH_ENDPOINTS.ME,
            tokenResponse.accessToken
          ).catch(() => {
            this.setState({
              error: 'Unable to fetch Graph profile.',
            })
          })

          if (graphProfile) {
            this.setState({
              graphProfile,
            })
          }

          if (tokenResponse.scopes.indexOf(GRAPH_SCOPES.MAIL_READ) > 0) {
            return this.readMail(tokenResponse.accessToken)
          }
        }
      }
    }

    public onSignOut() {
      msalApp.logout()
    }

    public async onRequestEmailToken() {
      const tokenResponse = await this.acquireToken(GRAPH_REQUESTS.EMAIL, useRedirectFlow).catch(
        e => {
          this.setState({
            error: 'Unable to acquire access token for reading email.',
          })
        }
      )

      if (tokenResponse) {
        return this.readMail(tokenResponse.accessToken)
      }
    }

    public async readMail(accessToken: any) {
      const emailMessages = await fetchMsGraph(GRAPH_ENDPOINTS.MAIL, accessToken).catch(() => {
        this.setState({
          error: 'Unable to fetch email messages.',
        })
      })

      if (emailMessages) {
        this.setState({
          emailMessages,
          error: null,
        })
      }
    }

    public async componentDidMount() {
      
      msalApp.handleRedirectCallback(error => {
        if (error) {
          const errorMessage = error.errorMessage
            ? error.errorMessage
            : 'Unable to acquire access token.'
          // setState works as long as navigateToLoginRequestUrl: false
          this.setState({
            error: errorMessage,
          })
        }
      })

      const account = msalApp.getAccount()

      this.setState({
        account,
      })

      if (account) {
        const tokenResponse = await this.acquireToken(GRAPH_REQUESTS.LOGIN, useRedirectFlow)

        if (tokenResponse) {
          const graphProfile = await fetchMsGraph(
            GRAPH_ENDPOINTS.ME,
            tokenResponse.accessToken
          ).catch(() => {
            this.setState({
              error: 'Unable to fetch Graph profile.',
            })
          })

          if (graphProfile) {
            this.setState({
              graphProfile,
            })
          }

          if (tokenResponse.scopes.indexOf(GRAPH_SCOPES.MAIL_READ) > 0) {
            return this.readMail(tokenResponse.accessToken)
          }
        }
      }
      else{
        this.onSignIn(true)
      }
    }

    render() {
      return (
        <C
          {...this.props}
          account={this.state.account}
          emailMessages={this.state.emailMessages}
          error={this.state.error}
          graphProfile={this.state.graphProfile}
          onSignIn={() => this.onSignIn(useRedirectFlow)}
          onSignOut={() => this.onSignOut()}
          onRequestEmailToken={() => this.onRequestEmailToken()}
        />
      )
    }
  }
