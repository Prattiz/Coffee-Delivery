import { Container } from "./header.styles";
import icon from "../assets/icon.svg";
import { MapPin, ShoppingCart, ArrowCircleLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";


interface OnHome{
    isOutOfHome:boolean,
    // order: boolean
}

export function Header({isOutOfHome = false, /* order*/}: OnHome){

    const navigate = useNavigate()



     function NavigateCart(){
        navigate("/cart")
     }

    //  function NavigateOrder(){
    //     navigate("/sucess")
    //  }

     function NavigateHome(){
        navigate("/");    
     }
    return(
        <Container>
            <img src={icon} alt="Coffee Delivery"/>

            <div>

            <button className={isOutOfHome ? "backButton" : "sr-only"} onClick={NavigateHome}>
                {
                isOutOfHome ?
                 <ArrowCircleLeft size={23} color="#8047F8" weight="fill"/>
                :
                <strong></strong>
                }
            </button>

                <span>
                    <MapPin size={23} color="#8047F8" weight="fill"/> 
                    Porto Alegre, RS
                </span>


                <button onClick={NavigateCart}> 
                    <ShoppingCart size={23} color="#C47F00" weight="fill"/>  
                </button>

                {/* <button className={order ? "orderButton" : "sr-only"} onClick={NavigateOrder}>
                    {
                    order ?
                    <Coffee size={23} color="#8047F8" weight="fill"/>
                    :
                    <strong></strong>
                    }
                </button> */}
            </div>
        </Container>
    )
}