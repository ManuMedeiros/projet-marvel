import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [nameHero, setNameHero] = useState();
  const [busca, setBusca] = useState();

  async function updateInput(e) {
    setNameHero(e.target.value);
    await resultBusca();
  }



  function resultBusca() {
    window.location.href = `/heroes?name=${nameHero}`;

  }

  return (

    <div className={styles.container}>
        <Head>
          <title>Marvel</title>
          <link rel="icon" href="/captain-america.png" />
        </Head>
        <div>
          <img className="logo-mobile" src="/marvel_mobile.jpg" />
        </div>
        <div className="buscaHerois">
          <input type="text" name="NameHero"  placeholder="Name's heros" onChange={(e) => {
            setNameHero(e.target.value);
          }} />
          <button onClick={(event) => {
            event.preventDefault();
            resultBusca();
          }}>Shearch</button>
        </div>
    </div>
  )
}