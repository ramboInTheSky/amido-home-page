import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainWrapper } from './App.styles'
import HomePage from './pages/HomePage'

const App: React.FC = () => {
  return (
    <MainWrapper>
      <Router>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    </MainWrapper>
  )
}

export default App
