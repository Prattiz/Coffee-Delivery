
import { Header } from "../../components/Header";
import { Background } from "./components/Background";
import { Coffes } from "./components/Coffee's";





export function Home() {
 

  return (
    <div>
      <Header isOutOfHome={false} />
      <Background /> 
      <Coffes />
    </div>
  )
}


