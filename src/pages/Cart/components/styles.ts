import styled from "styled-components";

export const Container = styled.div`

    h1{
        font-size: 1.8rem;  
    }

    form{
        display: flex;
        gap:3.2rem; 

        @media (max-width: 1250px) {
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }
    }
`

export const Content = styled.main`

    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    
    header, footer{
        display: flex;
        
        gap: 8px;
        line-height: 1.2;
        color:${props => props.theme["gray_400"]};

        span{
            color:${props => props.theme["gray_500"]};
        }
         
        div{
            flex-direction: column;
            gap:2px;
        }
    }  

    @media (max-width: 510px) {
        img{
            display: none;
        }
    }
`

export const CooffeCard = styled.main`

    padding: 5rem;
    display: flex;
    flex-direction: column; 
    gap:3.2rem;
    background-color:${props => props.theme["white_300"]};

    input[type="text"],  input[type="number"], label{
        width: 100%;
        padding: 1.2rem;
        border-radius: 4px;
        background-color: ${props => props.theme["white_500"]};
        color: ${props => props.theme["gray_300"]};
        border: 1px solid ${props => props.theme["white_400"]};
    }

    div{
        display: flex;
        gap:1.2rem;
    }

    #cep, #numero, #bairro{
        max-width: 20rem;
    }

    #uf{
        width: 20%;
    }    


    svg{
        color: ${props => props.theme["purple_800"]};
        height: 23px;
        width: 23px;
    }

    @media (max-width: 1250px) {
        max-width: 70rem;
    }
`

export const Apresentation = styled.div`

    display: flex;
    gap:auto;
    white-space: nowrap;

    div{
        display: flex;
        flex-direction: column;
        gap:8px;
    }

    span{
        color: ${props => props.theme["gray_500"]};
        font-weight: bold;
    }

    @media (max-width: 510px) {
        flex-direction: column-reverse;
    }
`

export const ButtonRemove = styled.button`

    background-color: ${props => props.theme["white_500"]};
    max-width: 15rem;
    border-radius: 8px;
    padding: 0 8px;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    height: 3.6rem;    
    color: ${props => props.theme["gray_400"]};
    font-size: 12px;

    &:hover{
        border: 1px solid ${props => props.theme["purple_800"]};
    }
`


export const FooterSelected = styled.footer`

    display: flex;
    flex-direction: column;
        

    p, strong{
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        align-items: center;
    }

    button{
        margin-top: 12px;
        background-color: ${props => props.theme["yellow_800"]};
        padding: 12px 8px;
        border-radius: 8px;
        font-weight: bold;
    }
`

export const PayMe = styled.div`

        
    label{
        padding: 16px;
        display: flex;
        gap: 16px;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
    }
    
    input:checked + label {
        border: 1px solid ${props => props.theme["purple_300"]};
        font-weight: bold;
    }


    @media (max-width: 650px) {
        flex-direction: column;
    }   
`