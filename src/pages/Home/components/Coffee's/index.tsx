import { Content } from "./styles";
import { Card } from "../Card";
import { Cooffes } from "../../../../components/Details/allCoffes";


export function Coffes(){

    return(
        <div className="sm-text-center">
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