import { createContext, ReactNode, useState } from "react";



type ChildrenProps = {
  children: ReactNode;
};

interface CustomerContextProps{
  cart: {id:number, values: number}[],
  addCoffee:(id: number) => void, 
  subtractCoffee: (id: number) => void,
  
}

export const CustomerContext = createContext({} as CustomerContextProps);



export function CustomerContextProvider({children}: ChildrenProps){

  const [ cart, setCart ] = useState<{id:number, values: number }[]>([]);


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
    <CustomerContext.Provider value={{cart, addCoffee, subtractCoffee}}>
      {children}
    </CustomerContext.Provider>
  )
}