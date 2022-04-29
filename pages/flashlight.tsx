// https://github.com/sickdyd/react-flashlight/blob/master/src/ReactFlashlight.js
// https://github.com/sickdyd/react-flashlight-demo/blob/master/src/App.js
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { ReactFlashlight } from "react-flashlight";
import flashStyle from "../styles/index.module.scss";
import { Howl, Howler } from "howler";
// https://github.com/goldfire/howler.js#quick-start

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

const Flashlight: NextPage = () => {
  // const { results = [] } = joke
  // console.log(joke);
  // console.log(results);

  function knockKnock() {
    const sound = new Howl({
      src: ["knock-knock.mp3"],
    });
    sound.once("load", function () {
      sound.play();
    });
  }
  function gotchaBitch() {
    const sound = new Howl({
      src: ["gotcha-bitch.mp3"],
    });
    sound.play();
  }
  function horn() {
    var sound = new Howl({
      src: ["air-horn.mp3"],
    });

    // Clear listener after first call.
    sound.once("load", function () {
      sound.play();
    });

    // // Fires when the sound finishes playing.
    // sound.on("end", function () {
    //   console.log("Finished!");
    // });
  }

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isOn, setIsOn] = useState(true);

  useEffect(() => {
    const isWindowContext = typeof window !== "undefined";
    const x: number = (isWindowContext && window.innerWidth / 2) as number;
    const y: number = (isWindowContext && window.innerHeight / 2) as number;
    // const point: number = { x: x, y: y };
    setPosition({ x: x, y: y });
    knockKnock();
  }, []);

  return (
    <div className={flashStyle.fullScreen}>
      <Head>
        <title>Knock Knock</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/torch.svg" />
      </Head>
      <ReactFlashlight
        initialPosition={position}
        size={150}
        // enableMouse={false}
        // showCursor={true}
      >
        <div className={flashStyle.animatedGrid}>
          <div className={flashStyle.k}>
            <h1 className={flashStyle.center}>knock knock...</h1>
          </div>
          <div className={flashStyle.w}>
            <h1 className={flashStyle.center}>who&apos;s there...</h1>
          </div>
          <div className={flashStyle.req}>
            <h1 className={flashStyle.center}>ligma</h1>
          </div>
          <div className={flashStyle.res}>
            <h1 className={flashStyle.center}>ligma who?</h1>
          </div>
          <div
            className={flashStyle.star}
            onMouseEnter={horn}
            onMouseLeave={gotchaBitch}
          >
            <h1 className={flashStyle.center}>ligma balls</h1>
          </div>
        </div>
      </ReactFlashlight>
    </div>
  );
};

export default Flashlight;
