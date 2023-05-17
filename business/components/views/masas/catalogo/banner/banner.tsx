import styles from './styles.module.css'
export default function Banner() {
    return(
        <>
            <section className={styles.section}>
                <div className={styles.content}>
                    <h1>Todos los productos Rapimasa <br/>que tenemos para ti</h1>
                </div>
            </section>
        </>
    )
}