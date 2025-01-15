import styled from 'styled-components';

export const Header = styled.header`
  padding: 0 1rem;
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
  align-items: center;
 padding-top: 3.5rem;
`


export const ul = styled.ul`
    display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2.5rem;
`

export const li = styled.li`
display: flex;

gap: 1rem;
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

export const theme = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
gap: 1.5rem;
`

export const button = styled.button`
  background-color: ${(props) => props.theme.secundary};
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  width: 28.8rem;
  height: 3.6rem;
  border-radius: 1.3rem;
`

export const contentMobile = styled.div``

export const themeBtn = styled.button`
color: ${(props) => props.theme.text};
`