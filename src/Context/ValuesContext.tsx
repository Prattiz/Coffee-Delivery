import { createContext, ReactNode, useState } from "react";



type ChildrenProps = {
  children: ReactNode;
};

interface CustomerContextProps{
  cart: {id:number, values: number}[],
  location:{street:string, HomeNumber: number, neighborhood: string, city: string, uf: string}[],
  addCoffee:(id: number) => void, 
  subtractCoffee: (id: number) => void,
  totalCart: number,
  handleRemove: (index: number) => void
  
}

export interface AllCoffeProps {
   
  id: number
  name?: string
  tags?: string[]
  image?: string
  text?: string
  
}


export const CustomerContext = createContext({} as CustomerContextProps);



export function CustomerContextProvider({children}: ChildrenProps){

  const [ cart, setCart ] = useState<{id:number, values: number}[]>([]);
  const totalCart = cart.reduce((total, cooffe ) => total + cooffe.values, 0);
  
  const [ location, setLocation ] = useState<{
    street:string, 
    HomeNumber: number, 
    neighborhood: string, 
    city: string, 
    uf: string
  }[]>([]);


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
        location
        
      }
    }
    >
      {children}
    </CustomerContext.Provider>
  )
}