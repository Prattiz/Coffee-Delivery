import { Container } from "./styles";
import { Plus, Minus } from "@phosphor-icons/react";

import { useContext } from "react";
import { CustomerContext } from "../../Context/ValuesContext";

import { AllCoffeProps } from "../../Context/ValuesContext";

export function ToggleCart({ id }: AllCoffeProps){
    
    const { cart, addCoffee, subtractCoffee } = useContext(CustomerContext);

    return(
        <Container> 
            <button type="button" onClick={() => subtractCoffee(id)}><Minus  weight="bold"/></button>

            <input type="number"
                 min={0} max={20} 
                 disabled
                 value={cart.find(values => values.id == id)?.values?? 0}
            />
            
           <button type="button" onClick={() => addCoffee(id)}><Plus  weight="bold"/></button>
        </Container>
    )
}