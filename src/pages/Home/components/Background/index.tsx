import { Container } from "./styles";
import CoffeBg from "../../../../assets/coffeBackground.png";
import { ShoppingCart, Package, Timer, Coffee  } from "@phosphor-icons/react";

export function Background(){
    return(
        <Container>
                <main>
                    <header>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </header>

                    <footer>
                            <span><ShoppingCart weight="fill"/>Compra simples e segura</span>
                            <span><Package  weight="fill" />Entrega rápida e rastreada</span>
                            <span><Timer weight="fill" />Embalagem mantém o café intacto</span>
                            <span><Coffee weight="fill"/> O café chega fresquinho até você</span>
                    </footer>
                </main>

                <img src={CoffeBg} alt="imagem de um capo com café e grãos de café com fundo amarelo" />           
        </Container>
       
    )
}