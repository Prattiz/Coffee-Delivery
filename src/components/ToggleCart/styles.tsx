import styled from "styled-components";

export const Container = styled.main`

    background-color: ${props => props.theme["white_500"]};
    border-radius: 8px;
    padding: 8px;
    display: flex;
    gap: 4px;
    justify-content: center;
    height: 3.6rem;
    max-width: 11rem;
        
    input{
        width: 3.5rem;
        border: none;
        font-size: 1.7rem;
        font-weight: bold;
        display: flex; 
        padding: 1px;
        text-align: center;
        border: none;
    }

    button{
        background: none;
        color: ${props => props.theme["purple_800"]};
       
    }
`