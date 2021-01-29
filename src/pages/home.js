import React, { useContext } from 'react'

import HeaderContainer from '../containers/headerContainer'
import MainContainer from '../containers/mainContainer'
import { GlobalContext } from '../context/GlobalContext'

export default function Home() {
  
  const { state } = useContext(GlobalContext)
  console.log(state);
  return (
    <>
      <HeaderContainer />
      <MainContainer></MainContainer>
    </>
  )
}
