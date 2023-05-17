import styles from './styles.module.css'
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../../../../content/contexts/ShoppingCartContext";
import Link from "next/link";

interface PropsCard {
    packagee: string
    price: number
    description: string
    id: number
    slug: string
}

const Card: React.FC<PropsCard> = ({packagee, price, description, id, slug}) => {
    const {cart, setCart} = useContext(CartContext);

    // console.log("carrito => ", cart)
    const addToCart = () => {
        setCart((currItems:any) => {
            const isItemsFound = currItems.find((item:any) => item.id === id);
            if (isItemsFound) {
                return currItems.map((item:any) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...currItems, { id, quantity: 1, price }];
            }
        });

    };

    const removeItem = (id:any) => {
        setCart((currItems:any) => {
            if (currItems.find((item:any) => item.id === id)?.quantity === 1) {
                return currItems.filter((item:any) => item.id !== id);
            } else {
                return currItems.map((item:any) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const getQuantityById = (id:any) => {
        return cart.find((item:any) => item.id === id)?.quantity || 0;
    };

    const quantityPerItem = getQuantityById(id);

    return (
        <>

            <div className={styles.card}>
                <div className={styles.singleImg}>
                    <img src="/images/producto/producto.jpg" alt=""/>
                </div>

                <div className={styles.content}>
                    <div className={styles.title_price}>
                        <h3>{packagee}</h3>
                        <p>$ {price} <span>Paquete</span></p>
                    </div>
                    <div className={styles.characteristics}>
                        <span>{description}</span>
                    </div>
                    <div className={styles.quantity}>
                        <i onClick={() => removeItem(id)} className='bx bx-minus'></i>
                        <span>{quantityPerItem}</span>
                        <i onClick={() => addToCart()} className='bx bx-plus'></i>
                    </div>

                    <div className={styles.botones}>
                        <Link href={`${slug}/${id}`}>
                            <a >Comprar</a>
                        </Link>
                        <i className='bx bx-cart-alt'></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
