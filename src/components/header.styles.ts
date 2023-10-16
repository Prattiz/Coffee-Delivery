import styled from "styled-components";

export const Container = styled.header`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.2rem 16rem;

    div{
        display: flex;
        gap: 1.2rem;
    }

    span{
        background-color: ${props => props.theme["purple_100"]};
        color: ${props => props.theme["purple_800"]};
        font-size: 1.4rem;
        display: flex;
        gap: 4px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        padding: 8px;
    }

    button{
        padding: 8px;
        border-radius: 6px;
        background: ${props => props.theme["yellow_100"]}; ;
    }

    @media (max-width: 630px) {
        flex-direction: column;
        justify-content: center;
        padding: 3.2rem;
        
        div{
        display: flex;
        flex-direction: column;
        margin-top: 12px;
        }  
    }

`