import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const HomePage = () => {
  return <div>This is Home</div>
}

const AboutPage = () => {
  return <div>This is About</div>
}

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
