import React from 'react'
import { render } from 'react-dom'


import { JobsContextProvider } from './context/GlobalContext'

import App from './App'

render(
  <JobsContextProvider>
    <App />
  </JobsContextProvider>,document.querySelector("#root")
)