// tslint:disable: jsx-no-lambda
import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import Loader from 'react-loader-spinner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { amidoTheme, LoaderContainer, MainWrapper } from './App.styles'
import HomePage from './pages/HomePage'
import theme from './theme'
import AuthProvider from './utils/AuthProvider'

const App: React.FC = (props: any) => {
  return props.account ? (
    <ThemeProvider theme={amidoTheme}>
      <MainWrapper>
        <Router>
          <Switch>
            <Route
              path="/"
              render={p => <HomePage {...p} account={props.account} logout={props.onSignOut} />}
            />
          </Switch>
        </Router>
      </MainWrapper>
    </ThemeProvider>
  ) : (
    <LoaderContainer>
      <Loader type="ThreeDots" color={theme.amidoColor} height={30} width={30} />
    </LoaderContainer>
  )
}

export default AuthProvider(App)
