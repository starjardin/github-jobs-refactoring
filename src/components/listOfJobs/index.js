import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import {
  Container,
  Item,
  Logo,
  Button,
  Text,
  Location,
  Time,
  Frame,
  ListContainer
} from './styles/listOfJobs'

export default function ListOfJobs({ children,...restProps }) {
  return <Container { ...restProps } >{ children }</Container>
}

ListOfJobs.Item = function ListOfJobsItem({ item,...restProps }) {
  return (
    <Item { ...restProps }>
      <ReachRouterLink to={ `/job/${item.id}`}>
        <Logo src={ item.company_logo } alt="Logo" />
        <Frame>
          <Text>{ item.location }</Text>
          <Text>{ item.title }</Text>
          <Button>{ item.type }</Button>
        </Frame>
      </ReachRouterLink>
    </Item>
  )
}

ListOfJobs.Location = function ListOfJobsLocation({children, ...restProps}) {
  return <Location {...restProps}>{children}</Location>
}

ListOfJobs.Time = function ListOfJobsTime({children, ...restProps}) {
  return <Time {...restProps}>{children}</Time>
}

ListOfJobs.ListContainer = function ListOfJobsListContainer({children, ...restProps}) {
  return <ListContainer {...restProps}>{children}</ListContainer>
}