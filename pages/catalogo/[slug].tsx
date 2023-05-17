import type {NextPage} from 'next'
import Layout from "../../business/components/layout/layout";
import Banner from "../../business/components/views/masas/catalogo/banner/banner";
import Productos from "../../business/components/views/masas/catalogo/productos/productos";

const Catalogo = (props: any) => {

    return (
        <>

            <Layout>
                <Banner/>
                <Productos data={props.data}/>

            </Layout>

        </>
    )
}


export default Catalogo


export async function getStaticPaths() {
    try {
        const slug = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/productos`)
        const data = await slug.json()
        const paths = data.productos.map((slug: any) => ({
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
        const info = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/productos`)
        const data = await info.json()
        return{
            props:{slug:slug, data:data.productos.filter((productos:any)=>productos.slug==slug)}
        }
    } catch (e) {
        console.log(e)
    }
}
