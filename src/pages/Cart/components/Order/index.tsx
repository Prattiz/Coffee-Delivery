import { Container, Content, CooffeCard } from "../styles";
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank} from "@phosphor-icons/react";
import { Selected } from "../Selected";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { CustomerContext } from "../../../../Context/ValuesContext";




export function Order(){

    const navigate = useNavigate();
    // const { location } = useContext(CustomerContext)



    function handleSubmitOrder(){
        
        navigate("/sucess")
    }

    
    return(
        <Container>

            <form onSubmit={handleSubmitOrder}>
            <Content>
                <h1>Complete seu pedido</h1>
                
                    <CooffeCard>
                        <header>
                            <MapPinLine  color="#C47F17" /> 

                            <div>
                                <span>Endereço da Entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </header>

                        
                            
                        <input 
                        required type="number" id="cep" placeholder="CEP" />
                        <label className="sr-only" htmlFor="cep">CEP</label>
                            
                        <input required type="text" id="rua" placeholder="Rua" />
                        <label className="sr-only" htmlFor="rua">Rua</label>

                        <div>
                            <input required type="number" id="numero" placeholder="Número" />
                            <label className="sr-only" htmlFor="numero">Número</label>

                            <input type="text" id="complemento" placeholder="Complemento (Opcional)" />
                            <label className="sr-only" htmlFor="complemento" >Complemento, Opcional</label>
                        </div>

                        <div>
                        
                            <input required type="text" id="bairro" placeholder="Bairro" />
                            <label className="sr-only" htmlFor="bairro">Bairro</label>

                            <input required type="text" id="cidade" placeholder="Cidade" />
                            <label className="sr-only" htmlFor="cidade">Cidade</label>

                            <input required type="text" id="uf" placeholder="UF" maxLength={2}/>
                            <label className="sr-only" htmlFor="uf">Uf</label>

                        </div>
                        

                        <footer>
                            <CurrencyDollar /> 

                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </footer>

                        <div className="payme">
                            <input required
                                type="radio" name="metodoPagamento" id="cartaoCredito"
                                value="cartaoCredito" className="sr-only"
                             />

                            <label htmlFor="cartaoCredito"><CreditCard />Cartão de Crédito</label>

                            <input required 
                                type="radio" name="metodoPagamento" id="cartaoDebito"       
                                value="cartaoDebito" className="sr-only"
                            />

                            <label htmlFor="cartaoDebito"><Bank />Cartão de Débito</label>

                            <input required  
                                type="radio" name="metodoPagamento" id="dinheiro" 
                                value="dinheiro" className="sr-only" 
                            />

                            <label htmlFor="dinheiro"><Money />Dinheiro</label>
                        </div>
                        
                    </CooffeCard>       
                
                </Content>

                <Selected/>
                
            </form>
            
        </Container>
    )
}