import React, { useContext } from 'react'

import { Header,Search } from '../components'
import { GlobalContext } from "../context/GlobalContext"
import ACTIONS from '../constant/actions'

export default function HeaderContainer() {
  const { dispatch } = useContext(GlobalContext)
  
  function handleSearchByKeyWords(e) {
    e.preventDefault()
    const keyWords = e.target.keywords.value
    dispatch({
      type: ACTIONS.SEARCH_JOB_BY_KEY_WORDS,
      foundJobsByKeyWords : keyWords
    })
  }
  
  return (
    <Header>
      <Header.Heading>Hello World</Header.Heading>
      <Header.Frame>
        <Search.Form onSubmit={handleSearchByKeyWords}>
          <Search.Frame>
            <Search.Input
              type="text"
              placeholder="title, companies, expertise"
              autofill="off"
              name="keywords"
            />
            <Search.Button type="submit">Search</Search.Button>
          </Search.Frame>
        </Search.Form>
      </Header.Frame>
    </Header>
  )
}
