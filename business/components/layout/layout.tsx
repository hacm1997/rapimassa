import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Form from "../../share/form/form";
import Whatsapp from "../../share/whatsapp/whatsapp";
import Header from "../header/header";

export default function Layout({children}: any) {

    return (
        <>
            <Header/>
            <Navbar/>
            {children}
            <Form/>
            <Whatsapp/>
            <Footer/>
        </>
    )
}
