import styles from './styles.module.css'
import {useRouter} from "next/router";
import React from "react";

interface Props {
    title: string;
}


const Banner: React.FC<Props> = ({title}) => {


    const router = useRouter()
    const carpeta = router.asPath.split('/')[1]
    const img = router.asPath.split('/')[2]

    const background = {
        backgroundImage: `url(/images/slider/${carpeta}/${img}.png)`,
    }


    return (
        <>
            <section style={background} className={styles.section}>
                <div className={styles.content}>
                    <h1>{title}</h1>
                </div>
            </section>
        </>
    )
}

export default Banner