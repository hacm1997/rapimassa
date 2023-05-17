import styles from './styles.module.css'
import Link from "next/link";

export default function Nav() {

    return (
        <>
            <nav className={styles.nav}>
                <div className={styles.general}>
                    {// @ts-ignore
                        menu_iten.recetas.item?.map((item: any, index: any) => {
                            return (
                                <div key={index} className={styles.item}>
                                    <Link href={item.url}>
                                        <a >{item.name}</a>
                                    </Link>
                                </div>
                            )
                        })}
                </div>
            </nav>
        </>
    )
}