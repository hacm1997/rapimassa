import styles from './styles.module.css'
import {useEffect, useState} from "react";


export default function Quantity(props:any) {

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

    useEffect(()=>{
        props.setQuantity(cantidad)
    }, [cantidad]);

    return (
        <>
            <div className={styles.quantity}>
                <i onClick={handleMenos} className='bx bx-minus'></i>
                <span>{cantidad}</span>
                <i onClick={handleMas} className='bx bx-plus'></i>
            </div>
        </>
    )
}
