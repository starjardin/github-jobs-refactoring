import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 1rem;
`
export const Text = styled.div`
  color : #334680;
  ul {
    padding: 0;
    li {
      list-style : none;
    }
  }
  
  a {
    text-decoration : none;
    color : #334680;
  }
`
export const Frame = styled.div`
  display: flex;
  gap : 2rem;
  padding-bottom : ${({padding}) => padding}
`
export const Application = styled.div`
  a {
    text-decoration : none;
    color : #334680;
  }
`
export const RightPannel = styled.div`
  
`
export const LeftPannel = styled.div`
  & > div > a {
    display: inline-block;
    padding-bottom : 3rem;
  }
`
export const Heading = styled.div`
`
export const Title = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #334680;
`
export const Button = styled.button`

`
export const Logo = styled.div`
  width : 52px;
  height : 52px;
  background-image : url(${({src}) => src});
`