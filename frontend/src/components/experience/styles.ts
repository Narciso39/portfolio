import styled from "styled-components";

export const container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 4rem;
  gap: 2rem;
`;

export const title = styled.h3`
  width: 15rem;
  text-align: center;
  font-size: 1.3rem;
  background-color: ${(props) => props.theme.gray};
  border-radius: 1rem;
  color: ${(props) => props.theme.title1};
`;

export const p = styled.p``;

export const card = styled.article`
  background-color: ${(props) => props.theme.card};
`;

export const nameCompany = styled.h3``;

export const date = styled.strong``;

export const work = styled.h4``;

export const func = styled.p``;
