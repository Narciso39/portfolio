import styled from "styled-components";

export const contactContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  gap: 2.5rem;
  background-color: ${(props) => props.theme.secBackground};
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

export const pContact = styled.p`
    font-size: 1.3rem;
`;

export const email = styled.strong`
    font-size: 2rem;
`;

export const phonenumber = styled.strong`
    font-size: 2rem;
`;

export const secondPContact = styled.p`
    font-size: 1.3rem;
`;

export const divImg = styled.div``

// export const img = styled.img``
