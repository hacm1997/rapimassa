import styles from './styles.module.css'
import Link from "next/link";
import {useRouter} from "next/router";
import {router} from "next/client";

export default function Nav() {

    const router = useRouter()
    const url = router.asPath.split('/')[2]

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.general}>
                    <div className={url == "para-freir" ? styles.item : ""}>
                        <Link href="/catalogo/para-freir">
                            <a className={styles.active}>Para freir</a>
                        </Link>
                    </div>
                    <div className={url == "para-hornear" ? styles.item : ""}>
                        <Link href="/catalogo/para-hornear">
                            <a className={styles.active}>Para hornear</a>
                        </Link>
                    </div>
                    <div className={url == "de-hojaldre" ? styles.item : ""}>
                        <Link href="/catalogo/de-hojaldre">
                            <a className={styles.active}>Para hojaldre</a>
                        </Link>
                    </div>
                    <div className={url == "para-pizza" ? styles.item : ""}>
                        <Link href="/catalogo/para-pizza">
                            <a className={styles.active}>Para pizza</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}