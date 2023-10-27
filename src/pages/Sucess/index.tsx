import { Container, Order } from "./styles";
import { Header } from "../../components/Header/Header";
import motoImage from "../../assets/manMotocicle.png";
import {CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"

export function Sucess() {
 

    return (
      <Container>
        <Header isOutOfHome={true} value={0} />
        <main>

            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          
          <header className="header">
            <Order> 
              <p>

                <MapPin  weight="fill"/> 
                Entregue em <strong className="wontBreak">....</strong>
                ...

              </p>

              <p>
                <Timer weight="fill"/>
                <span>

                  Previsão de entrega
                  
                  <strong>20 min - 30min</strong>

                </span>
              </p>
              <p><CurrencyDollar/> 
               <span>

                Pagamento da entrega
                <strong>Cartão de </strong>

               </span>
              </p>
            </Order>

            <img className="motoImage" src={motoImage} alt="imagem de um entregador indo ao seu destino de moto" /> 
            
          </header>

        </main>       
      </Container>
    )
  }