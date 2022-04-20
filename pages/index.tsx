import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import index from '../pages/index.module.scss'

// export async function getServerSideProps() {
//   const res = await fetch('https://api.jokes.one/knock-knock/random')
//   const joke = await res.json()
//   return {
//     props: {
//       joke
//     }
//   }
// }

const Home: NextPage = () => {
  // const { results = [] } = joke
  // console.log(joke);
  // console.log(results);
  return (
    <div className={styles.dark}>
      <Head>
        <title>Flashlight</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/flashlight.svg" />
      </Head>
      <div className={styles.main}>
        <Link href="./flashlight">
          {/* 
          possible fixes:
           https://github.com/vercel/next.js/issues/7915
          then:
           https://nextjs.org/docs/messages/react-hydration-error
          ------------------------------------------------------------
          make it load on the same page:
           https://flaviocopes.com/react-show-different-component-on-click */}
          <Image
            src="/flashlight.svg"
            alt="flashlight"
            height={120}
            width={90}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
