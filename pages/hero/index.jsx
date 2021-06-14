import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head'

const Hero = () => {
    const [data, setData] = useState ();
    const [search, setSearch] = useState();

   let idHero
   let url

    if (typeof window !== 'undefined') {
        url = window.location?.href;
        idHero = url.split("/hero?id=")[1]
    }

    useEffect(() => {
        axios
            .get(
                `https://gateway.marvel.com:443/v1/public/characters/${idHero}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
            )
            .then((preview) => {
                setSearch(preview.data.data.results);
                console.log(preview, 'click')
            });
    }, []);

    return (
        <div>
            <Head>
                <title>SuperHero</title>
                <link rel="icon" href="../captain-america.png" />
            </Head>
            {search &&
                <div className="heroi-solo">
                    <h2>
                        {search[0].name}
                    </h2>
                    <img
                        src={`${search[0].thumbnail.path}.${search?.[0]?.thumbnail.extension}`}
                    />
                    <p>
                        {search[0].description}
                    </p>
                    <div className="comic-list">
                        <h2>Comics</h2>
                        <ul className="ul-comic">
                            {search[0].comics.items.map((comic) => {
                                return (
                                    <li className="hq-list"><a href={`/comic?=${comic.resourceURI}`}>{comic.name}</a>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                        <h2>Stories</h2>
                        <ul className="ul-stories">
                            {search[0].stories.items.map((story) => {
                                return (
                                    <li className="stories-list">
                                        <a href={`/stories?=${story.resourceURI}`}>{story.name}</a>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <a className="back" href="../">Back</a>
                </div>
            }
        </div>
    )
}


export default Hero