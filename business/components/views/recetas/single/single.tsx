import styles from './styles.module.css'
import Nav from "./../nav/nav";
import Video from "./video/video";
import Card from "./card/card";
interface Props {
    title: string;
    time: string;
    content1: string;
    content2: string;
    ingredientes: string;

}
const Single: React.FC<Props> = ({title, time, content1, content2, ingredientes}) => {


    return (
        <>
            <section className={styles.section}>

                <div className={styles.general}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1><a href="#"><i className='bx bx-chevron-left'></i>
                                <span>Recetas que tenemos para ti con Rapimasa</span></a></h1>
                        </div>
                    </div>

                    <div className={styles.cardGeneral}>
                        <div className={styles.content}>
                            <div className={styles.info}>
                                <h2>{title}</h2>
                                <span><i className='bx bx-time'></i>5 minutos</span>
                            </div>

                            <div className={styles.description}>
                                <p>
                                    {content1}
                                </p>

                                {// @ts-ignore
                                    ingredientes.item.map((item: any, index: any) => (
                                        <div key={index}>
                                            <p><span>{item.id}.</span> {item.content}</p>
                                        </div>
                                    ))}


                                <p>
                                    {content2}
                                </p>
                            </div>

                            <div className={styles.producto}>
                                <h3>Puedes prepararlos con:</h3>
                                <Card/>
                            </div>
                        </div>
                        <div className={styles.video}>
                            <Video/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Single;
