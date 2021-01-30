import React, { useContext, useEffect, useState } from 'react'

import { Search } from '../components'
import { GlobalContext } from '../context/GlobalContext'
import ACTIONS from '../constant/actions.js'

export default function SearchContainer() {
  const { state,dispatch } = useContext(GlobalContext)
  const [jobsByGivenLocation, setJobsByGivenLocation] = useState(state.location)
  
  const cities = ["london", "Berlin", "canada", "new york"]
  
  function handleSearchjobsByLocation(e) {
    e.preventDefault()
    const location = e.target.location.value
    
    dispatch({
      type: ACTIONS.SEARCH_JOB_BY_LOCATION,
      foundJobsByLocation : location
    })
  }
  
  function handleSearchJobsByGivenLoaction(e) {
    setJobsByGivenLocation(e.target.value)
    dispatch({ type: ACTIONS.SEARCH_JOB_BY_GIVEN_LOCATION, foundJobsByGivenLocation: e.target.value })
  }
  
  useEffect(() => {
    setJobsByGivenLocation(state.location)
  }, [state.location])

  
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
        <Search.Button type="submit" display="none">Serch</Search.Button>
      </Search.Form>
      <Search.Form >
        {cities.map((city, index) => (
          <Search.InputContainer key={index}>
            <Search.Label htmlFor={city} > {city} </Search.Label>
            <Search.Input
              type="radio"
              id={city}
              name="city"
              value={city}
              checked={city.trim().toLocaleLowerCase() === jobsByGivenLocation.toLocaleLowerCase().trim()}
              onChange={handleSearchJobsByGivenLoaction}
            />
          </Search.InputContainer>
        )) }
        <Search.Button type="submit" display="none">Serch</Search.Button>
      </Search.Form>
    </Search>
  )
}
