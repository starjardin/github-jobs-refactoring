import React, { useContext } from 'react'

import { GlobalContext } from './context/GlobalContext'

export default function App() {
  
  const { state } = useContext(GlobalContext)
  console.log(state);
  return (
    <h2>
      Hello world
    </h2>
  )
}
