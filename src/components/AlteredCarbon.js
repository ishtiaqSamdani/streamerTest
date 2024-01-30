import React from 'react'
import alt from './AltCar.jpg'

export default function AlteredCarbon() {
    const handleTrailer = () => {
        window.open("https://youtu.be/M8PsZki6NGU?si=FCga4hqPYMc2udd_")
    }
    return (
        <>
            <div className="container mx-3 my-3">

                <div className="row">
                    <div className="col">
                        <img src={alt} style={{ width: 400, height: 600 }} />
                    </div>
                    <div className="col">
                        <p style={{ color: 'white' }}>Altered Carbon is an American cyberpunk television series created by Laeta Kalogridis and based on the 2002 novel of the same title by English author Richard K. Morgan.[1] In a world where consciousness can be transferred to different bodies, Takeshi Kovacs, a former soldier turned investigator, is released from prison in order to solve a murder. The first season consists of ten episodes and premiered on Netflix on February 2, 2018.[2] On July 27, 2018, the series was renewed for a second season of eight episodes,[3] which was released on February 27, 2020, with an anime film set before the first season released on March 19, 2020. Though the series received generally positive reviews, it was canceled after two seasons.</p>

                        <button className="btn btn-danger my-4 mx-4">Coming Soon</button>
                        <button onClick={handleTrailer} className="btn btn-primary my-4 mx-4">Watch Trailer</button>
                    </div>



                </div>

            </div>
        </>
    )
}
