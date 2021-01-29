import React from 'react'

import { Header, Search } from '../components/'

export default function HeaderContainer() {
  return (
    <Header>
      <Header.Heading>Hello World</Header.Heading>
      <Header.Frame>
        <Search.Frame>
          <Search.Input
            type="text"
            placeholder="title, companies, expertise"
          />
          <Search.Button>Search</Search.Button>
        </Search.Frame>
      </Header.Frame>
    </Header>
  )
}
