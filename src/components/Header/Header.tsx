import { Container } from "./header.styles";
import icon from "../../assets/icon.svg";
import { MapPin, ShoppingCart, ArrowCircleLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CustomerContext } from "../../Context/ValuesContext";



interface OnHome{
    isOutOfHome:boolean,
}


export function Header({isOutOfHome = false }: OnHome){

    const navigate = useNavigate();

    const { totalCart } = useContext(CustomerContext);
    
    
     function NavigateCart(){
        navigate("/cart")
     }

     function NavigateHome(){
        navigate("/");    
     }

    return(
        <Container>
            <img src={icon} alt="Coffee Delivery"/>

            <div>
                    
                {
                isOutOfHome &&
                    <button className="bg-purple"
                        onClick={NavigateHome}>
                        <ArrowCircleLeft color="#8047F8" weight="fill"/>
                    </button>
                }   
              

                <span>
                    <MapPin  color="#8047F8" weight="fill"/> 
                    Porto Alegre, RS
                </span>

           
                
                { 
                totalCart?
                    <button onClick={NavigateCart}> 
                        <strong>{totalCart}</strong>
                        <ShoppingCart  color="#C47F00" weight="fill"/>  
                    </button>
                   :
                    <button disabled> 
                        <strong className="sr-only"></strong>
                        <ShoppingCart color="#C47F00" weight="fill"/>  
                    </button> 
                }
                             
            </div>
        </Container>
    )
}