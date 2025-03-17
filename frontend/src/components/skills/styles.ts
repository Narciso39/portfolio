import styled from "styled-components";

export const devContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  gap: 2rem;
`;
export const imgDev = styled.img`
  width: 7rem;
  height: 7rem;

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    width: 10rem;
    height: 10rem;
  }
`;

export const title = styled.h3`
  width: 15rem;
  text-align: center;
  font-size: 1.3rem;
  background-color: ${(props) => props.theme.gray};
  border-radius: 1rem;
  color: ${(props) => props.theme.title1};

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 1.5rem;
  }
`;

export const logosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;
