import { Header } from "../../components/Header/Header";
import { Background } from "./components/Background";
import { Coffes } from "./components/Coffee's";







export function Home() {
 

  return (
    <div>
      <Header isOutOfHome={false} value={0}/>
      <Background /> 
      <Coffes />
    </div>
  )
}


