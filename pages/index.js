import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from "./Components/NavBar";
import HomePage from "./screens/homePage";
import WhatWeOffer from "./Components/whatweoffer/whatweoffer";
import Section_4 from "./Components/section_4/section_4";
import Footer from "./Components/footer/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SkillaAdhyan</title>
        <meta name="description" content="Fun way of learning new skills, powered by - RenderSoft" />
        <link rel="icon" href="/favicon.ico" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Josefin+Sans:ital,wght@0,100;0,300;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap" rel="stylesheet"/>
          </Head>
        <NavBar/>
        <div className={styles.rootContainer}>
            <HomePage/>
        </div>
      <Footer/>
    </div>
  )
}
