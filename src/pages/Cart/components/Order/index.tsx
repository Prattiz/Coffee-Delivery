import { Container, Content, CooffeCard, PayMe } from "../styles";
import { MapPinLine, CurrencyDollar, CreditCard, Money, Bank} from "@phosphor-icons/react";
import { Selected } from "../Selected";

import { useContext } from "react";
import { CustomerContext, FormData } from "../../../../Context/ValuesContext";

import { useForm, SubmitHandler } from "react-hook-form"




export function Order(){

    const { handleSubmitLocation, handlePaymentMethodChange } = useContext(CustomerContext);
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) => {
        handleSubmitLocation(data)
    };
    
    
    

    
    return(
        <Container>

            <form onSubmit={handleSubmit(onSubmit)}>
            <Content>
                <h1>Complete seu pedido</h1>
                
                    <CooffeCard>
                        <header>
                            <MapPinLine color="#C47F17" /> 

                            <div>
                                <span>Endereço da Entrega</span>
                                <p>Informe o endereço onde deseja receber seu pedido</p>
                            </div>
                        </header>

                        
                            
                        <input required
                         type="number" 
                         id="cep" 
                         placeholder="CEP" 
                         />

                        <label className="sr-only" htmlFor="cep">CEP</label>
                            
                        <input required
                         type="text" 
                         id="rua" 
                         {...register('Street')}
                         placeholder="Rua" 
                        />
                        <label className="sr-only" htmlFor="rua">Rua</label>

                        <div>
                            <input required
                             type="number" 
                             id="numero" 
                             {...register('HomeNumber')}
                             placeholder="Número" 
                             />

                            <label className="sr-only" htmlFor="numero">Número</label>

                            <input type="text" 
                            id="complemento" 
                            placeholder="Complemento (Opcional)" 
                            />
                            <label className="sr-only" htmlFor="complemento" >Complemento, Opcional</label>
                        </div>

                        <div>
                        
                            <input required
                             type="text" 
                             id="bairro" 
                             {...register('District')}
                             placeholder="Bairro" 
                             />
                            <label className="sr-only" htmlFor="bairro">Bairro</label>

                            <input required
                             type="text" 
                             id="cidade" 
                             {...register('City')}
                             placeholder="Cidade" 
                             />
                            <label className="sr-only" htmlFor="cidade">Cidade</label>

                            <input required
                             type="text" 
                             id="uf" 
                             {...register('Uf')}
                             placeholder="UF" 
                             maxLength={2}
                             />
                            <label className="sr-only" htmlFor="uf">Uf</label>

                        </div>
                        

                        <footer>
                            <CurrencyDollar /> 

                            <div>
                                <span>Pagamento</span>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                        </footer>

                        <PayMe>

                            <input required 

                                type="radio" name="metodoPagamento" id="cartaoCredito"
                                value="Cartão de Credito" className="sr-only"
                                onChange={handlePaymentMethodChange}
                             />

                            <label htmlFor="cartaoCredito"><CreditCard />Cartão de Crédito</label>

                            <input required 
                             
                                type="radio" className="sr-only" name="metodoPagamento" id="cartaoDebito"       
                                value="Cartão de Debito" 
                                onChange={handlePaymentMethodChange}
                            />

                            <label htmlFor="cartaoDebito"><Bank />Cartão de Débito</label>

                            <input required 
                              
                                type="radio" className="sr-only" name="metodoPagamento" id="dinheiro" 
                                value="Dinheiro" 
                                onChange={handlePaymentMethodChange} 
                            />

                            <label htmlFor="dinheiro"><Money />Dinheiro</label>
                        </PayMe>
                        
                    </CooffeCard>       
                
                </Content>

                <Selected/>
                
            </form>
            
        </Container>
    )
}