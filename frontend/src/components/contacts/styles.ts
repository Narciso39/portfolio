import styled from "styled-components";

export const contactContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    gap: 2.5rem;
    background-color: ${(props) => props.theme.secBackground};
`;

export const title = styled.h3``;

export const pContact = styled.p``;

export const email = styled.strong``;

export const phonenumber = styled.strong``;

export const secondPContact = styled.p``;
