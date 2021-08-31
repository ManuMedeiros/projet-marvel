import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'
import * as S from '../../styles/comic.style';

const comic = () => {
    const [hq, setHq] = useState();

    let url
    let idComic

    if (typeof window !== 'undefined') {
        url = window.location?.href;
        idComic = url.split("/comic?=")[1]
    }
    useEffect(() => {
        axios
            .get(
                `${idComic}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
            )
            .then((preview) => {
                setHq(preview.data.data.results)
                console.log(preview, 'resultado')
            })
    }, []);

    return (
        <div>
            <Head>
                <title>Comic</title>
                <link rel="icon" href="/captain-america.png" />
            </Head>
            {hq &&
                <S.DivGeneral>
                        <h1 className="title">
                            {hq[0].title}
                        </h1>
                        <img className="capa" src={`${hq[0].thumbnail.path}.${hq[0].thumbnail.extension}`} />
                    <h2>Creators</h2>
                    <S.Creators>
                        {hq[0].creators.items.map((criadores) => {
                            return (
                                <li>
                                    {criadores.name}
                                </li>
                            )
                        }
                        )}
                    </S.Creators>
                    <h2>Prices Market</h2>
                    <S.Prices>
                        {hq[0].prices.map((preço) => {
                            return (
                                <>
                                    <p className="price-type">
                                        "{preço.type}"
                                    </p>
                                    <p className="price-value">
                                        US${preço.price}
                                    </p>
                                </>
                            )
                        }
                        )}
                    </S.Prices>
                    <S.Back href="./">Back</S.Back>
                </S.DivGeneral>
            }
        </div>
    )
}

export default comic