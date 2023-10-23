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

    .payme{
        
        label{
            padding: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        input:checked + label {
            background-color: ${props => props.theme["yellow_200"]};
            color: ${props => props.theme["white"]};
            font-weight: bold;
        }
    }
`