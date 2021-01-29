import React from 'react'

import {
  Container,
  Input,
  Form,
  Button,
  Icon,
  Frame,
} from './styles/search'

export default function Search ({children, ...restProps}) {
  return (
    <Container { ...restProps }>{children}</Container>
  )
}

Search.Input = function SearchInput({...restProps }) {
  return <Input {...restProps} />
}

Search.Form = function SearchForm({ children,...restProps }) {
  return <Form { ...restProps } >{ children }</Form>
}

Search.Button = function SearchButton({ children,...restProps }) {
  return <Button { ...restProps } >{ children }</Button>
}

Search.Icon = function SearchIcon({ children,...restProps }) {
  return <Icon { ...restProps } >{ children }</Icon>
}

Search.Frame = function SearchFrame({ children,...restProps }) {
  return <Frame { ...restProps } >{ children }</Frame>
}
