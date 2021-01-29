import styled from 'styled-components'

export const Container = styled.div`
  padding : 1rem;
`

export const ListContainer = styled.ul`
  padding: 0;
`
export const Item = styled.li`
  margin-bottom : 2rem;
  padding : 1rem;
  list-style : none;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  
  a {
    display : flex;
    gap : 2rem;
    text-decoration : none;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #334680;
  }
`

export const Logo = styled.img`
  width : 15%;
  max-height : 15%;
  background-image : url(${({src}) => src});
`

export const Button = styled.button`
  border: 1px solid #334680;
  box-sizing: border-box;
  border-radius: 4px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #334680;
  padding: 10px;
`

export const Text = styled.p``

export const Frame = styled.div``

export const Location = styled.span``

export const Time = styled.span``