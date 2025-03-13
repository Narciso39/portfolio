import styled from "styled-components";

export const hero = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  padding: 0 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: ${(props) => props.theme.secBackground};

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const name = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid ${(props) => props.theme.text};
  animation: typing 4s steps(20) 1s 1 normal both, blink 0.5s step-end infinite;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: ${(props) => props.theme.text};
    }
  }

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    font-size: 5.5rem;
  }
`;

export const presentation = styled.p`
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};

  @media (width > ${(props) => props.theme.breakpoints.desktop}) {
    padding: 1rem;
    font-size: 1.7rem;
    font-weight: 200;
  }
`;

export const city = styled.p`
  display: flex;
  text-align: center;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
`;

export const projects = styled.p`
  display: flex;
  text-align: center;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
`;

export const link = styled.a`
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.text};
  font-size: 1.2rem;
`;

export const divLink = styled.div`
  display: flex;
  align-items: center;
  width: 2rem;
  height: 2rem;
  gap: 1.2rem;
`;
