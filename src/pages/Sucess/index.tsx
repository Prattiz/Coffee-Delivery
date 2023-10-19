import { Container, Order } from "./styles";
import { Header } from "../../components/Header";
import motoImage from "../../assets/manMotocicle.png";
import {CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"

export function Sucess() {
 

    return (
      <Container>
        <Header isOutOfHome={true}/>
        <main>

            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          
          <header className="header">
            <Order> 
              <p>

                <MapPin size={23} weight="fill"/> 
                Entregue em <strong className="wontBreak">....</strong>
                ...

              </p>

              <p>
                <Timer size={23} weight="fill"/>
                <span>

                  Previsão de entrega
                  
                  <strong>20 min - 30min</strong>

                </span>
              </p>
              <p><CurrencyDollar size={23}/> 
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