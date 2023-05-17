import PuntosBlancos from "../../content/apoyo-grafico/puntos_blancos";
import styles from './styles.module.css'
import Link from "next/link";
import Head from "next/head";

export default function Mantenimiento() {
    return (
        <>
            <Head>
                <meta content="Agilizamos los procesos de forma innovadora, ahorrando tiempo y aumentando la calidad con nuestras masas listas para rellenar como masa para hacer empanada, base para pizza, etc. Los impulsamos a explorar la creatividad y los llevamos al éxito desde su cocina." name="description"/>
                <meta content="RapiMasa" name="author"/>
                <link rel="icon" href="/images/favicon.png"/>
                <title>RapiMasa</title>


            </Head>
            <div className={styles.mantenimiento}>
                <PuntosBlancos/>

                <div className={styles.content_1}>
                    <div className={styles.logo_title}>
                        <img src="/images/logo/logo-color-rapimasa.png" alt=""/>
                        <h1>Nos estamos renovando <span>para tí</span></h1>
                    </div>
                    <div className={styles.content_2}>
                        <p>Muy pronto, <span>¡sin amasar, rellene y listo!</span></p>
                    </div>
                    <div className={styles.social}>
                        <Link href="https://www.instagram.com/rapimasa/">
                            <a target="_blank"><i className='bx bxl-instagram'></i></a>
                        </Link>
                        <Link href="https://www.facebook.com/RapimasaSas">
                            <a target="_blank"><i className='bx bxl-facebook'></i></a>
                        </Link>

                    </div>
                    <div className={styles.comunicacion}>
                        <Link href="https://wa.me/573002941972">
                            <a target="_blank"><p className={styles.whatsapp}><i
                                className={'bx bxl-whatsapp ' + styles.ico_whatsapps}></i></p></a>
                        </Link>
                        <a href="mailto:servicioalcliente@rapimasa.com"><p className={styles.email}><i
                            className='bx bx-envelope'></i>servicioalcliente@rapimasa.com</p></a>
                    </div>

                </div>
                <div className={styles.multimedia}>
                </div>
            </div>
        </>
    )
}