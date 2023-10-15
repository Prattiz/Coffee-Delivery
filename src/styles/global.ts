import { createGlobalStyle } from "styled-components";

export const GlobalStyles =createGlobalStyle`


:root{
    font-size: 62.5%;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto', sans-serif;
    
    font-size: 1.6rem;

    -webkit-font-smoothing: antialiased;
    
}

h1{
    font-family: 'Baloo 2', sans-serif;
}

a{
    text-decoration: none;
}

button {
    cursor: pointer;
    border: none;
}
`