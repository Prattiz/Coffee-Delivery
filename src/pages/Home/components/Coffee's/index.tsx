import { Content } from "./styles";
import { Card } from "../Card";
import { Cooffes } from "../Details/allCoffes";


  

export function Coffes(){

    

    

    return(
        <div>
            <h1>Nossos Cafés</h1>

            <Content>
            {
            Cooffes.map(coffee => (

                <Card
                    {...coffee}
                    key={coffee.id}
                />

            ))
          }
            </Content>
        </div>
    )
}