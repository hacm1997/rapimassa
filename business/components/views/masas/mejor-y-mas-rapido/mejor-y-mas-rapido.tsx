import styles from './styles.module.css'

interface Props {
    title: string;
    titleSpan: string;
    content: string;
    contentSpan: string;
    img: string;
    alt: string;
}

const RellenarYListo: React.FC<Props> = ({title, titleSpan, content, contentSpan, img, alt}) => {

    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>{title} <span>{titleSpan}</span></h2>
                        <p>
                            {content} <span>{contentSpan}</span>
                        </p>
                        <a href="#">Pide ahora</a>
                    </div>
                    <div className={styles.galery}>
                        <img src={img} alt={alt}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RellenarYListo