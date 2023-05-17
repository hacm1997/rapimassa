import styles from './styles.module.css'
import Link from "next/link";

export default function Card(props: any) {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.singleImg}>
                    <img src="/images/producto/producto.jpg" alt=""/>
                </div>
                <div className={styles.content}>
                    <h3>{props.name}</h3>
                    <p>{props.content}</p>
                    <Link href={props.url}>
                        <a>Ver receta</a>
                    </Link>
                </div>
            </div>

        </>
    )
}