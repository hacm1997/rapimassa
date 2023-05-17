import styles from './styles.module.css'

interface Props {
    content: string;
    contentSpan: string;
    botton: string;
}

const CallToAction: React.FC<Props> = ({content, contentSpan, botton}) => {

    return (
        <>

            <section className={styles.section}>
                <div className={styles.apoyoGrafico}>
                    <img src="/images/apoyo-grafico/masa.png" alt=""/>
                </div>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>
                            {content} <span>{contentSpan}</span>
                        </h2>
                        <a href="#">{botton}</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CallToAction