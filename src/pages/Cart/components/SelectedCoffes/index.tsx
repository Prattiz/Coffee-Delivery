import { Apresentation, ButtonRemove } from "../styles";
import { AllCoffeProps, CustomerContext } from "../../../../Context/ValuesContext";
import { ToggleCart } from "../../../../components/ToggleCart";
import { Trash } from "@phosphor-icons/react";
import { useContext } from "react";




export function SelectedCoffes({ image, name, id }: AllCoffeProps){

    const {handleRemove} = useContext(CustomerContext);

    function handleRemoveFromCart(index: number){
        handleRemove(index)
    }

    
    return(
        <Apresentation>
            <img src={image}/>
                
            <div>
                <h1>{name}</h1>
                <footer>
                    <ToggleCart id={id} />
                    <ButtonRemove type="button" onClick={() => handleRemoveFromCart(id)}><Trash/> REMOVER</ButtonRemove>
                </footer>
            </div>
            <span>R$ 9,90</span>
        </Apresentation>  
    )
}