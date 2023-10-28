import { Container, Order, MotoImage } from "./styles";
import { Header } from "../../components/Header/Header";
import motoImage from "../../assets/manMotocicle.png";
import {CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useContext } from "react";
import { CustomerContext } from "../../Context/ValuesContext";

export function Sucess() {
  const { location } = useContext(CustomerContext);

  console.log(location?.Street)


    return (
      <Container>
        <Header isOutOfHome={true} />
        <div>

            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          
          <main>
            <Order> 
              <div>

                <MapPin weight="fill"/> 

                <p>
                  <span>Entregue em <strong className="wontBreak"> {location?.Street}, {location?.HomeNumber}</strong></span>
                  {location?.District} - {location?.City}, {location?.Uf.toUpperCase()}
                </p>

              </div>

              <div>
                <Timer weight="fill"/>

                <p>

                  Previsão de entrega
                  
                  <strong>20 min - 30min</strong>

                </p>
              </div>
              <div>
                <CurrencyDollar/> 

                <p>
                  Pagamento da entrega
                  <strong>Cartão de C/D AND DINHEIRO </strong>
                </p>
              </div>
            </Order>

            <MotoImage src={motoImage} alt="imagem de um entregador indo ao seu destino de moto" /> 
            
          </main>

        </div>       
      </Container>
    )
  }