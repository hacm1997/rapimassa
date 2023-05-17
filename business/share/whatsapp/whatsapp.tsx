import styles from './styles.module.css';
import Cart from "../../components/navbar/cart/cart";

export default function Whatsapp() {
    return (
        <>
            <div className={styles.whatsapp}>
                <a href="https://wa.me/573002941972" target="_blank" rel="noreferrer">
                    <i className='bx bxl-whatsapp'></i>
                </a>
            </div>
           <div className={styles.cart}>
               <Cart/>
           </div>
        </>
    )
}