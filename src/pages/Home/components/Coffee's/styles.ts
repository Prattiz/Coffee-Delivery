import styled from "styled-components";



export const Content = styled.div`
    margin-top: 5.4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 40px;

    @media (max-width: 1300px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(1, 1fr); 
        
        div{
            margin: 0 auto;
        }
    }
`