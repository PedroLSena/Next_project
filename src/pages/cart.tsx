import { NextPage } from "next"
import Head from "next/head"
import Header from "../components/Header"
import { Container } from "reactstrap"
import CartTable from "../components/CartTable"
import CartTotal from "@/components/CartTotal"


const Home: NextPage = () =>{
    return(
        <>
        <Head>
            <title>Carrinho</title>
            <link rel="icon" href="#" />
        </Head>
        <Header />
            <main>
                <Container className="mb-5">
                <h1 className="my-5">
                    Carrinho
                </h1>

                <CartTable />
                <CartTotal />
                </Container>
            </main>
        </>
    )
}

export default Home;

