import { Container, Content, CooffeCard } from "../styles";
import { SelectedCoffes } from "../SelectedCoffes";
import { CustomerContext } from "../../../../Context/ValuesContext";
import { useContext } from "react";
import { Cooffes } from "../../../../components/Details/allCoffes";



export function Selected(){

    const { totalCart, cart } = useContext(CustomerContext);
    const total = totalCart * 9.90 + 3.50;
    const itens = totalCart * 9.90;
    

    return(
        <Container>
            <Content>
                <h1>Cafés Selecionados</h1>

                <CooffeCard>
                    {
                        cart.map(itens => {
                            const coffee = Cooffes.find(item => item.id === itens.id); 
                            
                            if (coffee) {
                              return (
                                <SelectedCoffes
                                  {...coffee}
                                  key={coffee.id}
                                />
                              )
                            } 
                          })      
                    }
                    
                    <footer className="footerSelected">
                    
                        <p>
                            Total de Itens 
                            <span>R$ {itens.toFixed(2)}</span>
                        </p>

                        <p>
                            Entrega
                            <span>R$ 3.50</span>
                        </p>

                        <strong>
                            Total 
                            <span>R$ {total.toFixed(2)}</span>
                        </strong>

                        <button type="submit">Confirmar Pedido</button>
                    </footer>
                </CooffeCard>
            </Content>
        </Container>
    )
}