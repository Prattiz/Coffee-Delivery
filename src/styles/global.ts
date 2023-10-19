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
    background-color: ${props => props.theme["white_200"]};
    font-size: 1.6rem;
    padding: 3.2rem 16rem;
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

button:hover{
    filter: brightness(1.02);
}

@media (max-width: 700px) {
    body{
        padding: 2rem 2rem;
    }
}
`