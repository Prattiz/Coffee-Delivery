import { Container, ButtonOutOfHome, ButtonRelative } from "./header.styles";
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
    const { totalCart, location } = useContext(CustomerContext);
    
    
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
                    <ButtonOutOfHome
                        onClick={NavigateHome}>
                        <ArrowCircleLeft weight="fill"/>
                    </ButtonOutOfHome>
                }   
              

                {
                location?
                    <span>
                        <MapPin weight="fill"/> 
                        {location?.City}, {location?.Uf}
                    </span>
                    :
                    <span>
                        <MapPin weight="fill"/>
                        Recife, Pe
                    </span>    
                }

           
                { 
                totalCart?
                    <ButtonRelative onClick={NavigateCart}> 
                        <strong>{totalCart}</strong>
                        <ShoppingCart weight="fill"/>  
                    </ButtonRelative>
                   :
                    <ButtonRelative disabled> 
                        <strong className="sr-only"></strong>
                        <ShoppingCart weight="fill"/>  
                    </ButtonRelative> 
                }
                             
            </div>
        </Container>
    )
}