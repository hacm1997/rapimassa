import Layout from "../../business/components/layout/layout";
import styles from './styles.module.css'
import FormProducto from "../../business/share/form_producto/form_producto";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function Producto() {
    const router = useRouter()
    const pathOriginOne = router.asPath.split('/')[2]
    const pathOriginTwo = router.asPath.split('/')[3]
    const [data, setData] = useState<any>();
    //console.log("pathOriginOne => ",typeof pathOriginOne ? pathOriginOne : null)
    //console.log("pathOriginTwo => ",typeof pathOriginTwo ? pathOriginTwo : null)



    useEffect(() =>{
        fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/productos`).then((res)=>{

            res.json().then((r)=>{
                if(r.productos){
                    //console.log("res => ", r.productos.filter((ms:any) => ms.slug === pathOriginOne).filter((item:any) => item.id === Number(pathOriginTwo)))
                    setData(r.productos.filter((ms:any) => ms.slug === pathOriginOne).filter((item:any) => item.id === Number(pathOriginTwo)))
                }
            })
        })
    }, [router.asPath])

    console.log("data => ", data)

    return (
        <>
            <Layout>

                <section className={styles.section}>
                    <div className={styles.general}>
                        <div className={styles.content}>
                            <div className={styles.link}>
                                <span>Catalogo</span>
                                <i className='bx bx-chevron-right'></i>
                                <span>Para freir</span>
                                <i className='bx bx-chevron-right'></i>
                                <span>{data ? data[0] ? data[0].package : null: null}</span>
                            </div>
                            <div className={styles.card}>
                                <div className={styles.title}>
                                    <h1>{data ? data[0] ? data[0].package : null : null}</h1>
                                </div>
                                <img src="/images/producto/producto-1.jpg" alt=""/>
                                <div className="content">
                                    <h3>{data ? data[0] ? data[0].description : null : null}</h3>
                                    <p>
                                        {data ? data[0] ? data[0].content : null : null}
                                    </p>
                                    <span><i className='bx bx-time'></i> {data ? data[0] ? data[0].time : null : null}</span>
                                </div>
                            </div>
                        </div>

                        <FormProducto data={data ? data : []}/>

                    </div>
                </section>

            </Layout>
        </>
    )
}
