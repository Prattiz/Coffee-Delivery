import styled from "styled-components";

export const Container = styled.div`


    h1{
        font-size: 1.8rem;  
    }

    form{
        display: flex;
        gap:3.2rem; 
    }

    .footerSelected{
        display: flex;
        flex-direction: column;
        width: 37.2rem;
        gap: 12px;
        

        p, strong{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        button{
            margin-top: 12px;
            background-color: ${props => props.theme["yellow_800"]};
            padding: 12px 8px;
            border-radius: 8px;
            font-weight: bold;
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
`

export const CooffeCard = styled.main`

    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap:3.2rem;
    background-color:${props => props.theme["white_300"]};

    input[type="text"], label{
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
        width: 20rem;
        }

    #uf{
        width: 20%;
    }    

    .payme{
        
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
    }

    svg{
        color:  ${props => props.theme["purple_800"]};
        height: 23px;
        width: 23px;
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
`

export const ButtonRemove = styled.button`


    background-color: ${props => props.theme["white_500"]};
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
