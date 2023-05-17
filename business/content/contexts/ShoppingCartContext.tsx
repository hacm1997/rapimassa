import React, {createContext, useEffect, useState} from "react";
import {useCookies} from "react-cookie";

export const CartContext = createContext<any>(null);

export const ShoppingCartProvider = ({ children }:any) => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const [cart, setCart] = useState([]);
    // console.log(cart)

    useEffect(()=>{
        if(cookies.market){
            const arr = JSON.parse(JSON.stringify(cookies.market));
            if(arr){
                if(arr.length < 1){
                    setCart([])
                }else{
                    setCart(arr);
                }
            }
        }else{
            setCart([]);
        }

    }, [])

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
    );
};
