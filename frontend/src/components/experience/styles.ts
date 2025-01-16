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
  max-width: 34.3rem;
  width: 100%;
  padding: 0 2rem;
  height: 28.8rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 1.5rem;
`;

export const nameCompany = styled.h3`
  color: ${(props) => props.theme.green};
  font-size: 1.5rem;
  font-weight: 500;
`;

export const date = styled.strong``;
export const position = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
export const work = styled.h4``;

export const func = styled.p`
   font-size: 1.05rem;
`;
