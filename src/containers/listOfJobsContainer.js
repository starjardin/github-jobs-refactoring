import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'
import { ListOfJobs } from '../components/'

export default function ListOfJobsContainer() {
  const { state } = useContext(GlobalContext)
  const { jobs } = state
  
  return (
    <ListOfJobs>
      <ListOfJobs.ListContainer>
        { jobs.map(item => (
          <ListOfJobs.Item item={ item } key={ item.id } />
        ))}
      </ListOfJobs.ListContainer>
    </ListOfJobs>
  )
}
