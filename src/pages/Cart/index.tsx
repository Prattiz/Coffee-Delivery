import { Container, Details } from "./styles";
import { Header } from "../../components/Header";

export function Cart() {
 
    return (
      <Container>
        <Header isOutOfHome={true}/>
        
        <Details>
          <h1>Complete seu pedido</h1>

          
        </Details>

      </Container>
    )
  }