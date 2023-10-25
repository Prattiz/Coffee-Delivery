import { Container, Apresentation } from "./styles";
import { ShoppingCartSimple, Plus, Minus } from "@phosphor-icons/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CustomerContext } from "../../../../Context/ValuesContext";



interface AllCoffeProps {
   
    id: number
    name: string
    tags: string[]
    image: string
    text: string
    
}

interface TagProps{
    tag: string
}

export function Card({ image, name, text, tags, id}: AllCoffeProps){

    const navigate = useNavigate();

    const { cart, addCoffee, subtractCoffee } = useContext(CustomerContext);


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
                    tags.map((tag, index) => (
                        <CoffeeTag key={index} tag={tag}/>
                    ))
                    }
                </div>

                <h1>{name}</h1>
                <p>{text}</p>
            </Apresentation>
        
            <form onSubmit={handleSubmit}>
                <p>R$<span>9:90</span></p>
                
                <div className="toogleNumber"> 
                    <button type="button" onClick={() => addCoffee(id)}><Plus size={20} weight="bold"/></button>
                    <input type="number"
                         min={0} max={20} 
                     disabled
                     value={cart.find(values => values.id == id)?.values?? 0}/>
                    <button type="button" onClick={() => subtractCoffee(id)}><Minus size={20} weight="bold"/></button>
                </div>
               
                <button type="submit"><ShoppingCartSimple size={22} color="#fff" weight="fill"/></button>
            </form>
            
        </Container>
    )}