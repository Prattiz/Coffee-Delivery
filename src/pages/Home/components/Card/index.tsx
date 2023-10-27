import { Container, Apresentation } from "./styles";
import { ShoppingCartSimple } from "@phosphor-icons/react";

import { useNavigate } from "react-router-dom";

import { AllCoffeProps } from "../../../../Context/ValuesContext";
import { ToggleCart } from "../../../../components/ToggleCart";


interface TagProps{
    tag: string
}

export function Card({ image, name, text, tags, id }: AllCoffeProps){

    const navigate = useNavigate();

   


    function handleSubmit(){

        navigate("/cart");
    }
      
    
    function CoffeeTag({tag}: TagProps) {
        return (
            <span className="tag">{tag.toUpperCase()}</span>
        )
    }
 

    return (
        <Container>
            <Apresentation>
                <img src={image} alt={name} />
                <div>
                    {
                    tags?.map((tag, index) => (
                        <CoffeeTag key={index} tag={tag}/>
                    ))
                    }
                </div>

                <h1>{name}</h1>
                <p>{text}</p>
            </Apresentation>
        
            <form onSubmit={handleSubmit}>
                <div>
                <p>R$<span>9,90</span></p>
                
                <ToggleCart id={id}/>
               
                <button className="submitButton" type="submit"><ShoppingCartSimple  color="#fff" weight="fill"/></button>
                </div>
            </form>
            
        </Container>
    )}