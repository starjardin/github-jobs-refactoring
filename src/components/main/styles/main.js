import styled from "styled-components"

export const Container = styled.div`
  @media (min-width : 900px) {
    display : flex;
    & > :first-child {
      flex-basis : 30%;
    }
  
    & > :nth-child(2) {
      flex-basis : 65%;
    }
  }
`