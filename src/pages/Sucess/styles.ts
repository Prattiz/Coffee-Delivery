import styled from "styled-components";

export const Container = styled.div`
    
    
    .header{
        display: flex;
        gap: 10rem;
    }

    h1{
        color:${props => props.theme["yellow_800"]};
        line-height: 1;
        margin-bottom: 8px;
        margin-top: 8rem;
    }

    p{
        font-size: 2rem;
        color: ${props => props.theme["gray_500"]};
        margin-bottom: 4rem;
    }

    .motoImage{
        width: 500px;
        height: 300px;
    }

    @media (max-width: 700px) {
        .motoImage{
            display: none;   
        }
        
    }
`


export const Order = styled.div`

    border: 1px solid ${props => props.theme["purple_800"]};
    padding: 4rem;
    border-radius: 6px 36px;
    display: flex;
    flex-direction: column;
    gap:3.2rem;

    svg {
        box-sizing: content-box;
        padding: 8px;
        border-radius: 20px;
        color: ${props => props.theme["white_200"]};
        margin-bottom: 8px;
    } 

    p{
        display: flex;
        text-align: center;
        gap: 1.2rem;
        font-size: 1.6rem;
    }
    p:nth-child(1) svg{
        background-color: ${props => props.theme["purple_800"]}
    }
    p:nth-child(2) svg {
        background-color: ${props => props.theme["yellow_200"]};
    }
    p:nth-child(3) svg{
        background-color: ${props => props.theme["yellow_800"]} 
    } 

    strong{
        font-size: 1.6rem;
        color: ${props => props.theme["black"]};
        font-weight: bold;
    }

    span{
        display: flex;
        flex-direction: column;
    }

`