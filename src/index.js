import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyeles } from './global-styles'
import { JobsContextProvider } from './context/GlobalContext'

import App from './App'

render(
  <Router>
    <JobsContextProvider>
      <GlobalStyeles />
      <App />
    </JobsContextProvider>
  </Router>,document.querySelector("#root")
)