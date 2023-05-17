import type {NextPage} from 'next'
import Layout from "../business/components/layout/layout";
import Banner from "../business/components/views/masas/banner/banner";
import MejorYMasRapido from "../business/components/views/masas/mejor-y-mas-rapido/mejor-y-mas-rapido";
import CallToAction from "../business/components/views/masas/call-to-action/call-to-action";
import Clientes from "../business/components/views/masas/clientes/clientes";
import styles from '../styles/Home.module.css'

import masaParaFreir from '../data/masa-para-freir'
import {useEffect} from "react";



const Home: NextPage = () => {

    useEffect(() => {
        window.location.href = '/masa-para-freir/deditos';
    }, [])

    const data = masaParaFreir[0];
    return (
        <>

            <section className={styles.section}>
                <img src="/images/logo/logo-blancorapimasa.png" alt="Logo RapiMasa"/>
            </section>

            {/*
            <Layout>

               <Banner
                    title={data.bannerHome.title}
                />
                <MejorYMasRapido
                    title={data.benefits.title}
                    titleSpan={data.benefits.titleSpan}
                    content={data.benefits.content}
                    contentSpan={data.benefits.contentSpan}
                    img={data.benefits.img}
                />
                <CallToAction
                    content={data.callToAction.content}
                    contentSpan={data.callToAction.contentSpan}
                    botton={data.callToAction.botton}
                />
                <Clientes
                    title={data.clientes.title}
                    titleSpan={data.clientes.titleSpan}
                    content={data.clientes.content}
                    contentSpan={data.clientes.contentSpan}
                />

        </Layout>
*/}
        </>
    )
}

export default Home
