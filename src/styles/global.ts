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
    overflow-y: auto;
    overflow-x: hidden;
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

.sr-only, label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

button:hover{
    filter: brightness(1.02);
}


input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input:focus {
    outline: none;
}


@media (max-width: 700px) {
    body{
        padding: 2rem 2rem;
    }
}
`