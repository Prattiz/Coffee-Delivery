import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    padding: 9.5rem 16rem;
    display: flex;



    header{
        display: flex;
        flex-direction: column;
        gap:1.6rem;
        margin-bottom: 6.6rem;

        h1{
            font-size: 4.8rem;
            font-weight: 800;
            line-height: 130%;
            color: ${props => props.theme["black"]};
        }

        p{
            font-size: 2rem;
            color: ${props => props.theme["gray_500"]};
        }  
    }

    footer{
        
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        
        span{
            display: flex;
            width: 35rem;
            gap:12px;
            align-items: center;
            color: ${props => props.theme["gray_400"]};

            svg {
                box-sizing: content-box;
                padding: 8px;
                border-radius: 20px;
                color: ${props => props.theme["white_200"]};
                margin-bottom: 8px;
            } 
        }

        span:nth-child(1) svg{
                background-color:  ${props => props.theme["yellow_800"]}
            }
        span:nth-child(2) svg {
            background-color:  ${props => props.theme["gray_400"]};
        }
        span:nth-child(3) svg{
            background-color:  ${props => props.theme["yellow_200"]};
        }
        span:nth-child(4) svg{
            background-color:  ${props => props.theme["purple_300"]};
        }
    }

    img{
        width: 70%;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        padding: 5rem;
        gap: 5rem;

        header{
            h1{
                line-height: 1;
            }
        }

        img{
            width: 70%;
            margin: 0 auto;
        }

        footer{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
    }
`