import { Home } from "../pages/Home";
import { Sucess } from "../pages/Sucess";
import { Cart } from "../pages/Cart";

import { Route, Routes } from "react-router-dom";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/cart" element = {<Cart/>}/>
            <Route path="/sucess" element = {<Sucess/>}/>
        </Routes>
    )
}