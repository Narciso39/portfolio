import styled from 'styled-components';

export const Header = styled.header`
  
    
`



export const logo = styled.h2`
    color: ${props => props.theme.logo};
    font-size: 3.0rem;
    font-weight: 600;
`
export const navbar = styled.nav`
display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
 
`


export const ul = styled.ul`
    display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const li = styled.li`
 font-size: 1.6rem;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.logo};
    cursor: pointer;
  }
`

export const logoMobile = styled.div`
  display: flex;
    align-items: center;
    width: 100%;
    height: 6.8rem;
    background-color: ${(props) => props.theme.background};
   justify-content: space-between;
    ` 
export const menuIcon = styled.div`
display: none;
color: ${(props) => props.theme.logo};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 5rem;
    height: 5rem;
  }

`

export const theme = styled.div``