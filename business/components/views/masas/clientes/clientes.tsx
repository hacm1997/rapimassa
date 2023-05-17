import styles from './styles.module.css'
import CardCicle from "./card_cicle/card_cicle";

interface Props {
    title: string;
    titleSpan: string;
    content: string;
    contentSpan: string;
}

const Clientes: React.FC<Props> = ({title, titleSpan, content, contentSpan}) => {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.apoyoGrafico_1}>
                    <img src="/images/apoyo-grafico/linea-amarilla.png" alt=""/>
                </div>
                <div className={styles.general}>
                    <div className={styles.cardGeneral}>
                        <CardCicle/>
                        <CardCicle/>
                        <CardCicle/>
                    </div>

                    <div className={styles.content}>
                        <h2>{title} <span>{titleSpan}</span></h2>
                        <p>{content} <span>{contentSpan}</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Clientes