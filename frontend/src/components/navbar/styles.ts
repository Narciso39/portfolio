import styled from "styled-components";

export const Header = styled.header`
  padding: 0 1rem;


  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 2rem;
  }
`;

export const logo = styled.h2`
  color: ${(props) => props.theme.logo};
  font-size: 3rem;
  font-weight: 600;

  
  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    width: 20rem;
  }
`;
export const navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  padding-top: 3.5rem;

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
   
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 2.5rem;


  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    /* width: auto; */
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 3rem;
    /* padding: 0 3rem; */
  }
`;

export const li = styled.li`
  display: flex;

  gap: 1rem;
  font-size: 1.6rem;
  color: ${(props) => props.theme.text};

  &:hover {
    color: ${(props) => props.theme.logo};
    cursor: pointer;
  }

  /* @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    gap: 4rem;
  } */
`;

export const link = styled.a`


  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    /* text-align: center; */
    width: 10rem;
  }

`
export const logoMobile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  background-color: ${(props) => props.theme.background};
  justify-content: space-between;


  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    padding: 4rem;
    margin-top: 3rem;
  }
  
`;
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


  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const theme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1.5rem;


  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 8rem;
  }
`;

export const button = styled.button`
  background-color: ${(props) => props.theme.secundary};
  font-size: 1.5rem;
  color: ${(props) => props.theme.primary};
  width: 28.8rem;
  height: 3.6rem;
  border-radius: 1.3rem;
`;

export const contentMobile = styled.div`

@media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    /* gap: 2rem; */
    /* text-align: center; */
    /* padding: 1rem; */
  }


`;

export const themeBtn = styled.button`
  color: ${(props) => props.theme.text};

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    width: 12rem;
  }
`;
