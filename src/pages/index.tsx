import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "../components/Header"

export default function Home() {
  return (
    <>
    <Head>
      <title>Create Next app</title>
      <meta name="description" content="create next app" />
    </Head>
    <Header/>
    <main>
      <h1>Well come to <a href=""></a>Next.js</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ad animi ducimus!</p>
    </main>

    </>
  );
}
