import { Container, Apresentation } from "./styles";
import { ShoppingCartSimple } from "@phosphor-icons/react";


interface AllCoffeProps {
   
    id: number
    name: string
    tags: string[]
    image: string
    text: string
}

export function Card({ image, name, text, tags }: AllCoffeProps){

    interface TagProps{
        tag: string
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
        
            <div>
                <span>R$ 9:90</span>
                <button><ShoppingCartSimple size={22} color="#fff" weight="fill"/></button>
            </div>
        </Container>
    )}