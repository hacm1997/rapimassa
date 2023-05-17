import styles from './styles.module.css'
import Nav from "./nav/nav";
import Card from "./card/card";

export default function Productos(props: any) {

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <Nav/>


                    <div className={styles.cardProducto}>

                        {props.data ? props.data.map((item: any, index: any) => (
                            <div key={index}>
                                <Card packagee={item.package} price={item.price} description={item.description} id={item.id} slug={item.slug}/>
                            </div>
                        )): null}

                    </div>
                </div>
            </section>
        </>
    )
}
