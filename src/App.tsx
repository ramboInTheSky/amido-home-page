import { ThemeProvider } from '@material-ui/core/styles'
// import * as Msal from 'msal'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { amidoTheme, MainWrapper } from './App.styles'
import HomePage from './pages/HomePage'
import AuthProvider from './utils/AuthProvider'

const App: React.FC = (props: any) => {
  // const msalConfig = {
  //   auth: {
  //     clientId: 'your_client_id',
  //   },
  // }

  // const msalInstance = new Msal.UserAgentApplication(msalConfig)

  // msalInstance.handleRedirectCallback((error, response) => {
  //   console.log(response)
  // })

  // const loginRequest = {
  //   scopes: ['user.read', 'mail.send'], // optional Array<string>
  // }

  // msalInstance.loginRedirect(loginRequest)
  if (!props.account) {
    props.onSignIn()
  }

  return (
    <ThemeProvider theme={amidoTheme}>
      <MainWrapper>
        <Router>
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
      </MainWrapper>
    </ThemeProvider>
  )
}

export default AuthProvider(App)
