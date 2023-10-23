import { Header } from "../../components/Header/Header";
import { Order } from "./components/Order";


export function Cart() {
 
    return (
      <div>
        <Header isOutOfHome={true} value={2}/>
        <Order/>
      </div>
    )
  }