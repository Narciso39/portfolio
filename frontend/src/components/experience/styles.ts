import styled from "styled-components";

export const container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.secBackground};

`;

export const title = styled.h3`
  width: 15rem;
  text-align: center;
  font-size: 1.3rem;
  background-color: ${(props) => props.theme.gray};
  border-radius: 1rem;
  color: ${(props) => props.theme.title1};

  /* @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 2rem;
  } */
`;

export const p = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const card = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  /* max-width: 34.3rem; */
  width: 90%;
  padding: 0 2rem;
  height: 28.8rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 1.5rem;


  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 5rem;

    height: 20.8rem;
  }
`;


export const desktopContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const nameCompany = styled.h3`
  color: ${(props) => props.theme.green};
  font-size: 1.5rem;
  font-weight: 500;

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

export const date = styled.strong`

@media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`;
export const position = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;



  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1.7rem;
  }

  
`;
export const work = styled.h4`

@media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`;

export const func = styled.p`
   font-size: 1.05rem;

   @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`;
