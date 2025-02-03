import styled from "styled-components";

export const container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  /* padding: 0 0.2rem; */
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const title = styled.h3`
  width: 15rem;
  text-align: center;
  font-size: 1.3rem;
  background-color: ${(props) => props.theme.gray};
  border-radius: 1rem;
  color: ${(props) => props.theme.title1};
`;

export const divTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1rem;
`;

export const p = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
`;

export const cardXp = styled.article``;

export const divPhoto = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34.3rem;
  /* width: 100%; */
  height: 25.6rem;
  background-color: ${(props) => props.theme.secondCard};
  border-radius: 1.5rem 1.5rem 0 0;
`;

export const divInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 2.5rem;
  /* max-width: 27.9rem;
  width: 100%; */
  height: 51.6rem;
  background-color: ${(props) => props.theme.card};
  border-radius: 0 0 1.5rem 1.5rem;
`;

export const projectPhoto = styled.img`
  max-width: 27.9rem;
  width: 100%;
  height: 19.2rem;
  /* object-fit: cover;  */
`;

export const projectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const projectP = styled.p`
  display: flex;
  align-items: center;
  padding: 1rem;
  text-align: center;
  max-width: 27.9rem;
  width: 100%;
`;

export const projectTec = styled.strong`
  width: 6rem;
  text-align: center;
  font-size: 1.3rem;
  background-color: ${(props) => props.theme.secondCard};
  border-radius: 1rem;
  font-weight: 400;
  /* color: ${(props) => props.theme.title1}; */
`;

export const divSkills = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1.3rem;
  max-width: 27.9rem;
  width: 100%;
`;

export const gitLink = styled.a``;

export const deployLink = styled.a``;

export const divLinks = styled.div``;
