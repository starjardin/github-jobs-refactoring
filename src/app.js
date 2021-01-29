import React, { useContext } from 'react'

import HeaderContainer from './containers/headerContainer'
import { GlobalContext } from './context/GlobalContext'

export default function App() {
  
  const { state } = useContext(GlobalContext)
  console.log(state);
  return (
    <HeaderContainer />
  )
}
