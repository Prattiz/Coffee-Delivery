import styled from "styled-components";

export const Container = styled.div`
    
    
    main{
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
        font-size: 1.6rem;
        color: ${props => props.theme["gray_500"]};
    }
`


export const Order = styled.div`

    border: 1px solid ${props => props.theme["purple_800"]};
    margin-top: 4rem;
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

    div{
        display: flex;
        text-align: center;
        gap: 1.2rem;
        font-size: 1.6rem;
    }
    div:nth-child(1) svg{
        background-color: ${props => props.theme["purple_800"]}
    }
    div:nth-child(2) svg {
        background-color: ${props => props.theme["yellow_200"]};
    }
    div:nth-child(3) svg{
        background-color: ${props => props.theme["yellow_800"]} 
    } 

    strong{
        font-size: 1.6rem;
        color: ${props => props.theme["gray_400"]};
        font-weight: bold;
    }

    p{
        display: flex;
        flex-direction: column;
        text-align: start;
    }


    .wontBreak{
        color: ${props => props.theme["gray_400"]};
    }

`

export const MotoImage = styled.img`

    width: 500px;
    height: 300px;
   

    @media (max-width: 700px) {
        display: none;   
    }
`