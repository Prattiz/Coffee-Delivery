import { Container } from "./header.styles";
import icon from "../assets/icon.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header(){
    return(
        <Container>
            <img src={icon} alt="Coffee Delivery"/>

            <div>
                <span><MapPin size={23} color="#8047F8" weight="fill"/> Porto Alegre, RS</span>
                <button><ShoppingCart size={23} color="#C47F00" weight="fill"/></button>
            </div>
        </Container>
    )
}