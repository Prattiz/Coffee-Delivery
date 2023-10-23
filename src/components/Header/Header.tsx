import { Container } from "./header.styles";
import icon from "../../assets/icon.svg";
import { MapPin, ShoppingCart, ArrowCircleLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";


interface OnHome{
    isOutOfHome:boolean,
    value: number,
   
}

export function Header({isOutOfHome = false, value,  }: OnHome){

    const navigate = useNavigate();



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
                    <button className="backButton"
                     onClick={NavigateHome}>
                        <ArrowCircleLeft size={23} color="#8047F8" weight="fill"/>
                    </button>
                    }
              

                <span>
                    <MapPin size={23} color="#8047F8" weight="fill"/> 
                    Porto Alegre, RS
                </span>

           
                <button onClick={NavigateCart}> 
                   {value !== 0 && <strong>{value}</strong>} 
                    <ShoppingCart size={23} color="#C47F00" weight="fill"/>  
                </button>                
            </div>
        </Container>
    )
}