import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  line-height: 1.5;
  background-color: #fff;
  color: #000;
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
