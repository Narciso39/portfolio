import { createGlobalStyle } from "styled-components";

// interface Props {
//   primary: string;
//   secundary: string;
//   background: string;
//   text: string;
//   title: string;
// }
export const GlobalStyles = createGlobalStyle`


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}


html {
    font-size: 62.5%;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  background-color: ${(props) => props.theme.background};
  color: ${props => props.theme.text};
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

button,
input,
textarea {
  border: none;
  background: none;
  font: inherit;
}

button {
  cursor: pointer;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
}


`;
