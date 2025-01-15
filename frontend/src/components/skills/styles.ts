import styled from "styled-components";

export const devContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 2rem;
  gap: 2rem;
`;
export const imgDev = styled.img`
  width: 7rem;
  height: 7rem;
`;

export const title = styled.h3`
  width: 15rem;
  text-align: center;
  font-size: 1.3rem;
  background-color: ${(props) => props.theme.gray};
  border-radius: 1rem;
  color: ${(props) => props.theme.title1};
`;

export const logosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
`;
