import React from 'react'

import { Main } from '../components'
import SearchContainer from './searchContainer'
import ListOfJobsContainer from './listOfJobsContainer'

export default function MainContainer() {
  return (
    <Main>
      <SearchContainer></SearchContainer>
      <ListOfJobsContainer />
    </Main>
  )
}
