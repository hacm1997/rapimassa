import type {NextPage} from 'next'
import Layout from "../../business/components/layout/layout";
import Carrito from "../../business/components/views/carrito/carrito";

const Home: NextPage = () => {
    return (
        <>

            <Layout>
                <Carrito/>
            </Layout>

        </>
    )
}

export default Home
