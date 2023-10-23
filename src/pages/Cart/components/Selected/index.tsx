import { Container, Content, CooffeCard } from "../styles";
import { SelectedCoffes } from "../SelectedCoffes";



export function Selected(){

    return(
        <Container>
            <Content>
                <h1>Cafés Selecionados</h1>

                <CooffeCard>
                    <SelectedCoffes/>
                    
                    <footer className="footerSelected">
                    
                        <p>
                            Total de Itens 
                            <span>2</span>
                        </p>

                        <p>
                            Entrega
                            <span>R$ 3,50</span>
                        </p>

                        <strong>
                            Total 
                            <span>R$ 30</span>
                        </strong>

                        <button type="submit">Confirmar Pedido</button>
                    </footer>
                </CooffeCard>
            </Content>
        </Container>
    )
}