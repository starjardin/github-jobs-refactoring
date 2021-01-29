import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {Home} from './pages'
import {JobDetails} from './pages'

export default function App() {
  
  return (
    <>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path={`/job/:jobId`}><JobDetails /></Route>
      </Switch>
    </>
  )
}
