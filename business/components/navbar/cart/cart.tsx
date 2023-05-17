import styles from "../styles.module.css";
import Link from "next/link";
import React, {useContext} from "react";
import {CartContext} from "../../../content/contexts/ShoppingCartContext";

export default function Cart(){

    const {cart, setCart} = useContext(CartContext);

    const quantity = cart.reduce((acc: any, curr: any) => {
        return acc + curr.quantity;
    }, 0);
    return(
        <>
            <Link href="/carrito"><i className={'bx bx-cart '+styles.market}><sup>{quantity !== 0 ? quantity : null}</sup></i></Link>
        </>
    )
}