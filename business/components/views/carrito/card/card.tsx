import styles from './styles.module.css'
import {useContext, useEffect, useState} from "react";
import {CartContext} from "../../../../content/contexts/ShoppingCartContext";
import {formatNumber} from "../../../../../services/functionsExport";
export default function Card(props:any) {
    const {cart, setCart} = useContext(CartContext);
    const [mas, setMas] = useState(1)
    const [menos, setMenos] = useState(1)
    const [cantidad, setCantidad] = useState(1)
    const [data, setData] = useState<any>()
    const id = props.data ? props.data.id : null;
    const price = data ? data[0] ? data[0].price:0:0;

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

    useEffect(() =>{

        fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/productos`).then((res)=>{
            res.json().then((r)=>{
                if(r.productos){
                    setData(r.productos.filter((item:any) =>item.id === id))
                }
            })
        })
    }, [])

    // console.log("data filter => ",data)

    return(
        <>
            <div className={styles.card}>
                <div className={styles.singleImg}>
                    <img src="/images/producto/producto.jpg" alt=""/>
                    <div className={styles.content}>
                        <h2>{data ? data[0] ? data[0].package : null :null}</h2>
                        <span>{data ? data[0] ? data[0].description : null :null}</span>
                    </div>
                </div>


                <div className={styles.quantity}>
                    <div className={styles.cantidad}>
                        <i onClick={() => removeItem(id)} className='bx bx-minus'></i>
                        <span>{quantityPerItem}</span>
                        <i onClick={() => addToCart()} className='bx bx-plus'></i>
                    </div>
                    <span>Max. 5 paquetes*</span>
                </div>

                <div className={styles.price}>
                    <p>${data ? data[0] ? formatNumber(data[0].price * quantityPerItem) : null :null}</p>
                    <span>Paquete</span>
                </div>
            </div>
        </>
    )
}
