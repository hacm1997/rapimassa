import styles from './styles.module.css'
import {useEffect, useState} from "react";


const Recetas = (props: { data: any, dt:string }) => {

    const [data, setData] = useState([])
    const [dt, setDt] = useState('');

    useEffect(() => {
        setData(props.data);
        setDt(props.dt);
    }, [])


    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <h1>Recetas que tenemos para ti</h1>
                        </div>
                    </div>

                    <div className={styles.cardGeneral}>


                    </div>
                </div>
            </section>
        </>
    )
}

export default Recetas;

export async function getStaticPaths() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/recetas`)
        const data = await res.json()
        const paths = data.map(({id}: any) => ({params: {id: `${id}`}}))
        return {
            paths,
            fallback: false
        }
    } catch (e) {
        console.log(e)
    }
}


export async function getStaticProps({params: {data}}: any) {
    data = "Hola"
    /*try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/recetas`+ params.id)
        const data = await res.json()
        return {
            props: {
                data,
                dt
            }
        }
    } catch (e) {
        console.log(e)
    }*/
    return {
        props: {
            data,
        }
    }
}
