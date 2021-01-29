import React, { useContext } from 'react'

import { Search } from '../components'
import { GlobalContext } from '../context/GlobalContext'
import ACTIONS from '../constant/actions.js'

export default function SearchContainer() {
  const { dispatch } = useContext(GlobalContext)
  
  function handleSearchjobsByLocation(e) {
    e.preventDefault()
    const location = e.target.location.value
    
    dispatch({
      type: ACTIONS.SEARCH_JOB_BY_LOCATION,
      foundJobsByLocation : location
    })
  }
  
  return (
    <Search>
      <Search.Form>
        <Search.Input
          type="checkbox"
        />
      </Search.Form>
      <Search.Form onSubmit={handleSearchjobsByLocation}>
        <Search.Input
          type="text"
          name="location"
          placeholder="city, state, zip code or country"
          shadow="2px 2px 2px 2px #ccc"
          autofill="off"
        />
        <Search.Button type="submit">Serch</Search.Button>
      </Search.Form>
    </Search>
  )
}
