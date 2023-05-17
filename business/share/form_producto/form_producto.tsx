import styles from './styles.module.css'
import Input from "../input/input";
import {useState} from "react";
import Quantity from "../cantidad/Quantity";
import {formatNumber} from "../../../services/functionsExport";

export default function FormProducto(props:any) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [direccion, setDireccion] = useState('')
    const [quantity, setQuantity] = useState<any>()


    return (
        <>
            <div className={styles.form}>
                <div className={styles.title}>
                    <h2>
                        Déjanos tus datos y tomaremos tu pedido
                    </h2>
                </div>
                <div className={styles.quantity}>
                    <div className={styles.price}>
                        <p>${props.data[0] ? formatNumber(props.data[0].price) : null} <span>Paquete</span></p>
                    </div>
                    <Quantity setQuantity={setQuantity}/>
                </div>
                <form action="">
                    <Input id={"Nombre"} type="text" placeholder="Nombre" name="name" value={name}
                           onChange={(e) => setName(e.target.value)}/>
                    <Input id={"email"} type="email" placeholder="Email" name="email" value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <Input id={"phone"} type="text" placeholder="Teléfono" name="phone" value={phone}
                           onChange={(e) => setPhone(e.target.value)}/>
                    <Input id={"ciudad"} type="text" placeholder="Ciudad" name="ciudad" value={ciudad}
                           onChange={(e) => setCiudad(e.target.value)}/>
                    <Input id={"direcion"} type="text" placeholder="Dirección" name="direccion" value={direccion}
                           onChange={(e) => setDireccion(e.target.value)}/>

                    <button>Comprar</button>
                </form>
            </div>

        </>
    )
}
