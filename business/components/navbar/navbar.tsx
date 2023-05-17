import styles from './styles.module.css'
import {useRouter} from "next/router";
import SubMenu from "./subMenu/subMenu";
import Link from "next/link";
import Nav from '../../../data/navbar'
import React, {useContext, useEffect} from "react";
import {CartContext} from "../../content/contexts/ShoppingCartContext";
import {useCookies} from "react-cookie";
import moment from "moment";
import Cart from "./cart/cart";

moment.locale("es");
const Navbar = (props: any) => {


    const currentDay = moment.utc().subtract(3, 'hours').toDate();
    const [cookies, setCookie, removeCookie] = useCookies();
    const {cart, setCart} = useContext(CartContext);

    {/*Navbar*/
    }
    const [icon, setIcon] = React.useState("bx bx-menu-alt-right");
    const [menu, setMenu] = React.useState(styles.menu);


    const quantity = cart.reduce((acc: any, curr: any) => {
        return acc + curr.quantity;
    }, 0);
    const router = useRouter()
    const ruta = router.asPath
    console.log(ruta)

    {/*Navbar*/
    }
    const handleMenu = () => {
        if (icon === "bx bx-menu-alt-right") {
            setIcon("bx bx-menu-alt-left");
            setMenu(styles.menuActive);
        } else {
            setIcon("bx bx-menu-alt-right");
            setMenu(styles.menu);
        }
    }

    const data = Nav[0]

    useEffect(() => {
        if (quantity === 0) {
            // console.log("remove")
            setCookie('market', [], {path: '/', maxAge: 3600 * 2000});
        } else {
            const marketArray = JSON.stringify(cart);
            setCookie('market', marketArray, {path: '/', maxAge: 3600 * 2000});
        }
    }, [quantity])
    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.general}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <a><img src="/images/logo/logo-blancorapimasa.png" alt="logo"/></a>
                        </Link>
                    </div>
                    <div className={menu}>
                        {// @ts-ignore
                            data.nav.item?.map((item: any, index: any) => {
                                return (
                                    <div key={index}>
                                        <Link href={item.url}>
                                            <a className={router.asPath === item.url ? `${styles.active}` : styles.noActive}>{item.name}</a>
                                        </Link>
                                    </div>
                                )
                            })}
                        <div className={styles.cart}>
                            <Cart/>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div onClick={handleMenu} className={styles.botonMovil}>
                        <Link href="#"><i className={icon}></i></Link>
                    </div>
                </div>
                <SubMenu ruta={ruta}/>
            </nav>

        </>
    )
}

export default Navbar
