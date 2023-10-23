import { Container, Content, CooffeCard } from "../styles";
import { MapPinLine, CurrencyDollar } from "@phosphor-icons/react";
import { Selected } from "../Selected";


export function Order(){
    return(
        <Container>

            <form action="">
            <Content>
                <h1>Complete seu pedido</h1>
                
                    <CooffeCard>
                        <header>
                            <MapPinLine size={23} color="#C47F17" /> 

                            <div>
                                <span>Endereço da Entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </header>

                        
                            
                        <input type="text" id="cep" placeholder="CEP" />
                        <label className="sr-only" htmlFor="cep">CEP</label>
                            
                        <input type="text" id="rua" placeholder="Rua" />
                        <label className="sr-only" htmlFor="rua">Rua</label>

                        <div>
                            <input type="text" id="numero" placeholder="Número" />
                            <label className="sr-only" htmlFor="numero">Número</label>

                            <input type="text" id="complemento" placeholder="Complemento (Opcional)" />
                            <label className="sr-only" htmlFor="complemento">Complemento, Opcional</label>
                        </div>

                        <div>
                        
                            <input type="text" id="bairro" placeholder="Bairro" />
                            <label className="sr-only" htmlFor="bairro">Bairro</label>

                            <input type="text" id="cidade" placeholder="Cidade" />
                            <label className="sr-only" htmlFor="cidade">Cidade</label>

                            <input type="text" id="uf" placeholder="UF" />
                            <label className="sr-only" htmlFor="uf">Uf</label>

                        </div>
                        

                        <footer>
                            <CurrencyDollar size={23} color="#8047F8" /> 

                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </footer>

                        <div className="payme">
                            <input type="radio" name="metodoPagamento" id="cartaoCredito" value="cartaoCredito" className="sr-only"/>
                            <label htmlFor="cartaoCredito">Cartão de Crédito</label>

                            <input type="radio" name="metodoPagamento" id="cartaoDebito" value="cartaoDebito" className="sr-only"/>
                            <label htmlFor="cartaoDebito">Cartão de Débito</label>

                            <input type="radio" name="metodoPagamento" id="dinheiro" value="dinheiro" className="sr-only" />
                            <label htmlFor="dinheiro">Dinheiro</label>
                        </div>
                        
                    </CooffeCard>       
                
                </Content>

                <Selected/>
            </form>
            
        </Container>
    )
}