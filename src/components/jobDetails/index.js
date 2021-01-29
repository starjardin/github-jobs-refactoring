import React from 'react'

import {
  Container,
  Text,
  Application,
  Heading,
  Title,
  Frame,
  RightPannel,
  LeftPannel,
  Button,
  Logo
} from './styles/jobDetails'

export default function JobDetails({ children,...restProps }) {
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

JobDetails.Text = function JobDetailsText({ children,...restProps }) {
  return <Text {...restProps}>{ children }</Text>
}

JobDetails.RightPannel = function JobDetailsRightPannel({ children,...restProps }) {
  return <RightPannel {...restProps}>{ children }</RightPannel>
}
JobDetails.LeftPannel = function JobDetailsLeftPannel({ children,...restProps }) {
  return <LeftPannel {...restProps}>{ children }</LeftPannel>
}

JobDetails.Frame = function JobDetailsFrame({ children,...restProps }) {
  return <Frame {...restProps}>{ children }</Frame>
}

JobDetails.Application = function JobDetailsApplication({ children,...restProps }) {
  return <Application {...restProps}>{ children }</Application>
}

JobDetails.Heading = function JobDetailsHeading({ children,...restProps }) {
  return <Heading {...restProps}>{ children }</Heading>
}

JobDetails.Title = function JobDetailsTitle({ children,...restProps }) {
  return <Title {...restProps}>{ children }</Title>
}

JobDetails.Button = function JobDetailsButton({ children,...restProps }) {
  return <Button {...restProps}>{ children }</Button>
}

JobDetails.Logo = function JobDetailsLogo({ children,...restProps }) {
  return <Logo {...restProps}>{ children }</Logo>
}