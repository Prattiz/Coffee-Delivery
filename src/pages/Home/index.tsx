import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Background } from "./components/Background";
import { Coffes } from "./components/Coffee's";





export function Home() {
 

  return (
    <Container>
      <Header isOutOfHome={false}/>
      <Background/> 
      <Coffes/>
    </Container>
  )
}


