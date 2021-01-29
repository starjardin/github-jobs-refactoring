import React from 'react'

import { Container } from './styles/main'

export default function Main({ children,...restProsp }) {
  return (
    <Container { ...restProsp }>{ children } </Container>
  )
}
