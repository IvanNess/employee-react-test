import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Main from './main'
import Employees from './employees'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/employees' exact component={Employees}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
