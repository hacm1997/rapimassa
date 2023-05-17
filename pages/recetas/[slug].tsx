import Layout from "../../business/components/layout/layout";
import styles from './styles.module.css'
import Card from "../../business/components/views/recetas/card/card";


const Recetas = (props: any) => {

// console.log(props.data)

    return (
        <>
            <Layout>
                <section className={styles.section}>
                    <div className={styles.general}>
                        <div className={styles.content}>
                            <div className={styles.title}>
                                <h1>Recetas que tenemos para ti</h1>
                            </div>
                        </div>

                        <div className={styles.cardGeneral}>

                            {props.data.map((item: any, index: any) => (
                                <div key={index}>
                                    <Card name={item.name} content={item.content} url={item.link}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

// @ts-ignore
export default Recetas;


export async function getStaticPaths() {
    try {
        const slug = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/recetas`)
        const data = await slug.json()
        const paths = data.recetas.map((slug: any) => ({
            params: {
                slug:slug.slug
            },
        })as any)
        return {
            paths,
            fallback: false
        }
    } catch (e) {
        console.log(e)
        return { paths: [], fallback: false }
    }
}

export async function getStaticProps({params:{slug}}: never) {
    try {
        const info = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/recetas`)
        const data = await info.json()
        return{
            props:{slug:slug, data:data.recetas.filter((receta:any)=>receta.slug==slug)}
        }
    } catch (e) {
        console.log(e)
    }
}

