import React from 'react'

import { Search } from '../components'

export default function SearchContainer() {
  return (
    <Search>
      <Search.Form>
        <Search.Input
          type="checkbox"
        />
      </Search.Form>
      <Search.Form>
        <Search.Input
          type="text"
          placeholder="city, state, zip code or country"
          shadow="2px 2px 2px 2px #ccc"
        />
      </Search.Form>
    </Search>
  )
}
