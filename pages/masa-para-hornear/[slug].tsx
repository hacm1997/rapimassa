import Layout from "../../business/components/layout/layout";
import Banner from "../../business/components/views/masas/banner/banner";
import MejorYMasRapido from "../../business/components/views/masas/mejor-y-mas-rapido/mejor-y-mas-rapido";
import CallToAction from "../../business/components/views/masas/call-to-action/call-to-action";
import Clientes from "../../business/components/views/masas/clientes/clientes";

const MasaParaHornear = (props: any) => {

    return (
        <>

            <Layout>
                <Banner
                    title={props.data[0].bannerHome.title}
                />
                <MejorYMasRapido
                    title={props.data[0].benefits.title}
                    titleSpan={props.data[0].benefits.titleSpan}
                    content={props.data[0].benefits.content}
                    contentSpan={props.data[0].benefits.contentSpan}
                    img={props.data[0].benefits.img}
                    alt={props.data[0].benefits.alt}
                />
                <CallToAction
                    content={props.data[0].callToAction.content}
                    contentSpan={props.data[0].callToAction.contentSpan}
                    botton={props.data[0].callToAction.botton}
                />
                <Clientes
                    title={props.data[0].clientes.title}
                    titleSpan={props.data[0].clientes.titleSpan}
                    content={props.data[0].clientes.content}
                    contentSpan={props.data[0].clientes.contentSpan}
                />
            </Layout>

        </>
    )
}

export default MasaParaHornear


export async function getStaticPaths() {
    try {
        const slug = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/masa-para-hornear`)
        const data = await slug.json()
        const paths = data.masa.map((slug: any) => ({
            params: {
                slug: slug.slug
            },
        }) as any)
        return {
            paths,
            fallback: false
        }
    } catch (e) {
        console.log(e)
        return { paths: [], fallback: false }
    }
}

export async function getStaticProps({params: {slug}}: never) {
    try {
        const info = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL as string}/api/masa-para-hornear`)
        const data = await info.json()
        return {
            props: {slug: slug, data: data.masa.filter((masa: any) => masa.slug == slug)}
        }
    } catch (e) {
        console.log(e)
    }
}

