import styles from './styles.module.css'
import {useState} from "react";

export default function Card() {

    const [mas, setMas] = useState(1)
    const [menos, setMenos] = useState(1)
    const [cantidad, setCantidad] = useState(1)

    const handleMas = () => {
        setMas(mas + 1)
        setCantidad(cantidad + 1)
    }

    const handleMenos = () => {
        if (cantidad > 1) {
            setMenos(menos - 1)
            setCantidad(cantidad - 1)
        } else {
            setCantidad(1)
        }
    }


    return (
        <>

            <div className={styles.card}>
                <div className={styles.singleImg}>
                    <img src="/images/producto/producto.jpg" alt=""/>
                </div>

                <div className={styles.content}>
                    <div className={styles.title_price}>
                        <h3>Estándar Paquete x30 Unidades</h3>
                        <p>$14.850 <span>Paquete</span></p>
                    </div>
                    <div className={styles.characteristics}>
                        <span>(Redonda) -1.200gr -13 cm di.</span>
                    </div>
                    <div className={styles.quantity}>
                        <i onClick={handleMenos} className='bx bx-minus'></i>
                        <span>{cantidad}</span>
                        <i onClick={handleMas} className='bx bx-plus'></i>
                    </div>
                    
                    <div className={styles.botones}>
                        <a href="#">Comprar</a>
                        <i className='bx bx-cart-alt'></i>
                    </div>
                </div>
            </div>
        </>
    )
}