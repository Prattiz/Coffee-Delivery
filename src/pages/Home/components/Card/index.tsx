import { Container, Apresentation } from "./styles";
import { ShoppingCartSimple, Plus, Minus } from "@phosphor-icons/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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

export function Card({ image, name, text, tags}: AllCoffeProps){

    const [value, setValue] = useState(0);
    const navigate = useNavigate();



    function handleChange(event: any){
        const newValue = parseInt(event.target.value, 10);
        
        setValue(newValue); 
      }
    
    function addCoffee(e: any){
        e.preventDefault()
        if (value < 20) {
          setValue(value + 1);
        }
    }
    
    function subtractCoffee(e: any){
        e.preventDefault()
        if (value > 0) {
          setValue(value - 1);
        }
    }

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
                    <button onClick={addCoffee}><Plus size={20} weight="bold"/></button>
                    <input type="number"
                     min={0} max={20} 
                     onChange={handleChange}
                     disabled
                     value={value}/>
                    <button onClick={subtractCoffee}><Minus size={20} weight="bold"/></button>
                </div>
               
                <button type="submit"><ShoppingCartSimple size={22} color="#fff" weight="fill"/></button>
            </form>
            
        </Container>
    )}