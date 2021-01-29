import React from 'react'

import { Container, Heading, Frame } from './styles/header'

export default function Header({ children,...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Header.Heading = function HeaderHeading({ children,...restProps }) {
  return <Heading { ...restProps } >{ children }</Heading>
}

Header.Frame = function HeaderFrame({ children,...restProps }) {
  return <Frame { ...restProps } >{ children }</Frame>
}