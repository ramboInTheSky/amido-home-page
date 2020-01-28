import { ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { amidoTheme, MainWrapper } from './App.styles'
import HomePage from './pages/HomePage'



const App: React.FC = () => {
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

export default App
