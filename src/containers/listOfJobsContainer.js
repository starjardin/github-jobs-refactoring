import React,{ useContext } from 'react'
import Spinner from 'react-bootstrap/Spinner'
import { GlobalContext } from '../context/GlobalContext'
import { ListOfJobs } from '../components/'

export default function ListOfJobsContainer() {
  const { state } = useContext(GlobalContext)
  const { jobs, loading } = state
  
  //TODO: Spinner
  
  return (
    loading ? <h2>Loading....</h2> :
      <ListOfJobs>
        <ListOfJobs.ListContainer>
          { jobs.map(item => (
            <ListOfJobs.Item item={ item } key={ item.id } />
          ))}
        </ListOfJobs.ListContainer>
      </ListOfJobs>
  )
}
