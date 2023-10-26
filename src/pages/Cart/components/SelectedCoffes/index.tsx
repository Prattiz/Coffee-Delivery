import { Apresentation, ButtonRemove } from "../styles";
import { AllCoffeProps } from "../../../../Context/ValuesContext";
import { ToggleCart } from "../../../../components/ToggleCart";
import { Trash } from "@phosphor-icons/react";




export function SelectedCoffes({ image, name, id }: AllCoffeProps){

    
    return(
        <Apresentation>
            <img src={image}/>
                
            <div>
                <h1>{name}</h1>
                <footer>
                    <ToggleCart id={id} />
                    <ButtonRemove><Trash size={20} color="#8047F8"/> REMOVER</ButtonRemove>
                </footer>
            </div>
            <span>R$ 9,90</span>
        </Apresentation>  
    )
}