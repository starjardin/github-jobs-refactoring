import styled from 'styled-components'

export const Container = styled.div``

export const Input = styled.input`
  border : none;
  padding : 1rem;
  margin-left : 1rem;
  width : ${({width}) => width};
  margin-bottom : 10px;
  border : 1px #fff solid;
  box-shadow : ${({shadow}) => shadow};
  &:focus, &:hover {
    outline : none;
    border : 1px #ccc solid;
    border-radius : 5px;
  }
`
export const Form = styled.form``

export const Button = styled.button`
  margin : 0 2rem;
  padding : 0.7rem 1.2rem;
  background-color : #1E86FF;
  border : none;
  display : ${({display}) => display};
  border-radius : 5px;
  cursor: pointer;
  color: #ffffff;
  &:hover {
    transform : scale(1.1);
    background-color : #3333f3;
    box-shadow : 2px 2px 4px 2px #ccc;
  }
`

export const Icon = styled.div``
export const Label = styled.label``
export const InputContainer = styled.div`
  padding-inline : 10px;
  &:first-child {
   margin-top : 2rem;
  }
`

export const Frame = styled.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
  background-color : #fff;
  max-width : 1300px;
  width : 100%;
  margin : auto;
  padding-block : 1rem;
  border-radius : 5px;
  flex-wrap : wrap;
`