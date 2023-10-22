import { Header } from "../../components/Header";
import { Order } from "./components/Order";

export function Cart() {
 
    return (
      <div>
        <Header isOutOfHome={true}/>
        
        <Order/>

      </div>
    )
  }