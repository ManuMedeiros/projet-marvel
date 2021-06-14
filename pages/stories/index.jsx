import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Head from 'next/head'

const stories = () => {
    const [story, setStory] = useState();

    let url
    let idStory

    if (typeof window !== 'undefined') {
        url = window.location?.href;
        idStory = url.split("/stories?=")[1]
    }


    useEffect(() => {
        axios
            .get(
                `${idStory}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
            )
            .then((preview) => {
                setStory(preview.data.data.results);
                console.log(preview, 'stories')
            }
            )
    }, []);

    return (
        <div>
            <Head>
                <title>Stories</title>
                <link rel="icon" href="/captain-america.png" />
            </Head>
            {story &&
                <div className="page-story">
                    <>
                        <img className="herosRead" src="../herois-lendo.jpg" />
                        <h1>{story[0].title}</h1>
                    </>
                    <>  
                        <h2>heroes involved</h2>
                        {story[0].characters.items.map((heroes) => {
                            return (
                                <p>
                                    {heroes.name}
                                </p>
                            )
                        }
                        )}
                    </>
                    <>
                        <h2>Series</h2>
                        {story[0].series.items.map((series) => {
                            return (
                                <p>
                                    {series.name}
                                </p>
                            )
                        }
                        )}
                    </>
                    <>
                        <h2>Type</h2>
                        <p>{story[0].type}</p>
                    </>
                    <a className="back" href="./">Back</a>
                </div>
            }
        </div>
    )
}

export default stories