import styled from "styled-components";

export const Container = styled.div`

    width: 25.6rem;
    height: 31rem;
    padding: 2rem;
    border-radius: 6px 36px;
    background:  ${props => props.theme["white_300"]};


    div{
        
        display: flex;
        padding-top: 1rem;
        align-items: center;
        gap: 8px;

        span{
            font-size: 2.4rem;
            font-family: 'Baloo 2';
            font-weight: bold;
            color: ${props => props.theme["gray_400"]};
        }
    }

    button{
        background-color: ${props => props.theme["purple_800"]};
        border-radius: 8px;
        padding: 8px;
    }
`

export const Apresentation = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    

    img{
        margin-top: -5rem;
        height: 12rem;
        width: 12rem;
        
    }

    h1{
        font-size: 2rem;
        color: ${props => props.theme["gray_500"]};
        line-height: 1;
        margin-bottom: 8px;
    }

    p{
        color: ${props => props.theme["gray_300"]};
        line-height: 130%;
        font-size: 1.4rem;
        text-align: center;
        margin-bottom: 1rem;        
    }
    
    div{
        display: flex;
        gap: 1rem;
        
        span{
            font-weight: bold;
            padding: 4px 8px;
            font-size: 1rem;
            color: ${props => props.theme["yellow_800"]};
            background-color: ${props => props.theme["yellow_100"]};
        }
    }
`