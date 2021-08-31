import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head'
import * as S from '../../styles/heros.style'



function nameHeroes() {
    const [data, setData] = useState();


    let url
    let nameHero

    if (typeof window !== 'undefined') {
        url = window.location?.href;
        nameHero = url.split("name=")[1];
    }


    useEffect(() => {
        axios
            .get(
                `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`
            )
            .then((preview) => {
                setData(preview.data.data.results);
                console.log(preview, 'check')

            });
    }, []);

    return (
        <div className="body">
            <Head>
                <title>Heroes</title>
                <link rel="icon" href="../captain-america.png" />
            </Head>
            <S.TitleList>
                <h1>Hero List</h1>
                <a href="../">Back</a>
            </S.TitleList>
            {data &&
                <S.HeroList className="hero-list">
                    {data.map((herois) => {
                        return (
                        <S.HeroBox  href={`/hero?id=${herois.id}`}>
                            <p>
                                {herois.name}
                            </p>
                            <S.Image
                                src={`${herois.thumbnail.path}.${herois.thumbnail.extension}`}
                            />
                        </S.HeroBox>
                    )
                }
                )}
                </S.HeroList>}
        </div>
    )
}




export default nameHeroes
