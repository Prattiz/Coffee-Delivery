import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";



type ChildrenProps = {
  children: ReactNode;
};

export interface AllCoffeProps {
   
  id: number
  name?: string
  tags?: string[]
  image?: string
  text?: string
  
}

export interface FormData {
  Street: string
  HomeNumber: number
  District: string
  City: string
  Uf: string
}

interface CustomerContextProps{
  cart: {id:number, values: number}[],
  addCoffee:(id: number) => void, 
  subtractCoffee: (id: number) => void,
  totalCart: number,

  handleRemove: (index: number) => void,

  location: FormData | undefined,
  handleSubmitLocation: (location: FormData) => void,

  paymentMethod: string,
  handlePaymentMethodChange: (Event:any) => void
  
}



export const CustomerContext = createContext({} as CustomerContextProps);



export function CustomerContextProvider({children}: ChildrenProps){

  const [ cart, setCart ] = useState<{id:number, values: number}[]>([]);
  const totalCart = cart.reduce((total, cooffe ) => total + cooffe.values, 0);
  
  const [ location, setLocation ] = useState<FormData>();

  const [ paymentMethod, setpaymentMethod] = useState(''); 

  const navigate = useNavigate();



  function handleRemove(index: number){
    setCart(
        cart.filter((product) => index !== product.id)
    )
  }

  function addCoffee(id: number){

    if(!cart.find(cooffee => cooffee.id == id)){
      setCart(prevcart => ([...prevcart, {id, values : 1}]));
      return ;
    }

    setCart(prevcart => prevcart.map((cooffee) => {
      if(cooffee.values < 20 && cooffee.id == id){
          return {
            ...cooffee, 
            values: cooffee.values + 1
          }
      }
        return cooffee
      }))    
  }
    
  function subtractCoffee(id: number){
       
    setCart(prevcart => prevcart.map((cooffee) => {
      if(cooffee.values > 0 && cooffee.id == id){
        return {
          ...cooffee, 
          values: cooffee.values - 1
        }
      }
      return cooffee
    }))  
  }

  function handleSubmitLocation(newLocation: FormData){
    setLocation(newLocation);
    
    navigate("/sucess")
  };


  function handlePaymentMethodChange(event: any){
    setpaymentMethod(event.target.value);
  }
  

  return(
    <CustomerContext.Provider 
    value=
    {
      {
        cart,
        addCoffee, 
        subtractCoffee, 
        totalCart, 
        handleRemove,
        location,
        handleSubmitLocation,
        paymentMethod,
        handlePaymentMethodChange
      }
    }
    >
      {children}
    </CustomerContext.Provider>
  )
}