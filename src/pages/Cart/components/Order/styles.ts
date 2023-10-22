import styled from "styled-components";

export const Container = styled.div`

    margin-top: 5rem;

    h1{
        font-size: 1.8rem;  
    }

    form{
        display: flex;
        gap:3.2rem;
    }
`

export const Content = styled.main`

    max-width: 640px;
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

export const CooffeCard = styled.div`

    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap:3.2rem;
    background-color:${props => props.theme["white_300"]};

    input, label{
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

    
    
`