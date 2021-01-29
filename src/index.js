import React from 'react'
import { render } from 'react-dom'

import { GlobalStyeles } from './global-styles'
import { JobsContextProvider } from './context/GlobalContext'

import App from './App'

render(
  <JobsContextProvider>
    <GlobalStyeles />
    <App />
  </JobsContextProvider>,document.querySelector("#root")
)