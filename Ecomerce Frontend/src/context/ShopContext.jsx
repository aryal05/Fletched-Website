import{createContext} from "react"
import {products} from "../assets/assets"



export const ShopContext =createContext();

const ShopContextProvider =()=>{
    const currecy = '$'
    const delivery_fee = '10'
    
    const value = {
        products, currecy, delivery_fee

    }

    return(
        <ShopContextProvider>

            {props.children}


        </ShopContextProvider>
    )
}

export default ShopContextProvider;