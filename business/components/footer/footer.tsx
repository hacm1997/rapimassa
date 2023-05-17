import styles from './styles.module.css'
import Link from "next/link";
import foot from "../../../data/footer";

export default function Footer() {

    const data = foot[0]



return (
    <>
        <footer className={styles.footer}>
            <div className={styles.general}>
                <div className={styles.content_1}>
                    <div className={styles.logo}>
                        <img src="/images/logo/logo-blancorapimasa.png" alt=""/>
                    </div>
                    <h2>{data.about.title}</h2>
                    <p>{data.about.content}</p>
                </div>

                <div className={styles.content_2}>
                    <h2>{data.contact.title}</h2>
                    <div className={styles.infoUbi}>
                        <div className={styles.itenUbi}>
                            <i className='bx bx-map'></i>
                            <div className={styles.info}>
                                <p>
                                    {data.contact.direction}
                                </p>
                            </div>
                        </div>


                        <div className={styles.itenUbi}>
                            <i className='bx bx-time-five'></i>
                            <div className={styles.info}>
                                {
                                    // @ts-ignore
                                    data.schedule.item?.map((item: any, index: any) => {
                                        return (
                                            <p key={index}>{item.title} <br/> {item.content}</p>
                                        )
                                    }) }
                            </div>
                        </div>
                        <div className={styles.itenUbi}>
                            {
                                // @ts-ignore
                                data.contact.phone.item?.map((item: any, index: any) => {
                                    return (
                                        <Link href={item.link} key={index}>
                                            <a> <i className={item.icon}></i></a>
                                        </Link>
                                    )
                                }) }
                        </div>

                    </div>
                </div>

                <div className={styles.content_3}>
                    <h2></h2>
                    <div className={styles.social}>
                        {
                            // @ts-ignore
                            data.social.item?.map((item: any, index: any) => {
                                return (
                                    <Link href={item.link} key={index}>
                                        <a><i className={item.icon}></i></a>
                                    </Link>
                                )
                            })}
                    </div>
                    <br/>
                    <div className={styles.infoLegal}>
                        <h2>Legales</h2>
                        <p>Terminos y condiciones.</p>
                        <p>NIT. 1226852962</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
)
}