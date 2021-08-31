import React, { useState } from 'react'
import Head from 'next/head'
import * as S from '../styles/home.style'
// import styles from '../styles/Home.module.css'

export default function Home() {
  const [nameHero, setNameHero] = useState();

  async function updateInput(e) {
    setNameHero(e.target.value);
    await resultBusca();
  }



  function resultBusca() {
    window.location.href = `/heroes?name=${nameHero}`;

  }

  return (

    <S.DivGeneral>
      <Head>
        <title>Marvel</title>
        <link rel="icon" href="/captain-america.png" />
      </Head>

      <div>
        <img className="logo-mobile" src="/marvel_mobile.jpg" />
      </div>
      <S.SearchHero className="buscaHerois">
        <S.Input type="text" name="NameHero" placeholder="Name's heros" onChange={(e) => {
          setNameHero(e.target.value);
        }} />
        <S.Button onClick={(event) => {
          event.preventDefault();
          resultBusca();
        }}>Search</S.Button>
      </S.SearchHero>
    </S.DivGeneral>
  )
}