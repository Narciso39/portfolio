import styled from "styled-components";

export const hero = styled.section`
  overflow: hidden;
`;

export const name = styled.h2`
  font-size: 2rem;
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
`;

export const presentation = styled.p``;

export const city = styled.p``;

export const projects = styled.p``;

export const link = styled.a``;
