import styled from "styled-components";

export const Container = styled.main`

    background-color: ${props => props.theme["white_500"]};
    border-radius: 8px;
    padding: 8px;
    display: flex;
    gap: 4px;
    justify-content: center;
    height: 3.6rem;
    width: 12rem;
        
    input{
        width: 3.5rem;
        font-size: 1.7rem;
        font-weight: bold;
        display: flex; 
        padding: 1px;
        text-align: center;
        border: none;

        @media (max-width: 100) {
            
        }
    }

    button{
        background: none;
        color: ${props => props.theme["purple_800"]};
    }
`