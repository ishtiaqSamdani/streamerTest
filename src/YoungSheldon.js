import React from 'react'
import ys from './components/ys.jpeg'
export default function YoungSheldon() {
  const handleStream = () => {
    window.open("https://www.netflix.com/in/title/80192612")
  }
  const handleTrailer = () => {
    window.open("https://www.youtube.com/watch?v=iGKnI3Lc7C4&ab_channel=SeriesTrailerMP")
  }

  return (

    <>
      {/* <div className="container my-3 mx-3">
        <img src={ys} style={{ width: 400, height: 600 }} />
      </div> */}

      <div className="container mx-3 my-3">
        <div className="row">
          <div className="col">
            <img src={ys} style={{ width: 400, height: 600 }} />
          </div>
          <div className="col">
            <p style={{ color: 'white' }}> Young Sheldon is an American coming-of-age sitcom television series created by Chuck Lorre and Steven Molaro for CBS. The series, set in the late 1980s and early 1990s, is a spin-off prequel to the American sitcom The Big Bang Theory and follows main character Sheldon Cooper growing up with his family in East Texas. Iain Armitage stars as young Sheldon, alongside Zoe Perry, Lance Barber, Montana Jordan, Raegan Revord, and Annie Potts. Jim Parsons, who portrays the adult Sheldon Cooper on The Big Bang Theory, narrates the series and is also an executive producer.

              Development of the prequel series began in November 2016, from an initial idea that Parsons passed along to The Big Bang Theory producers. The following March, Armitage and Perry were cast, and the series was ordered by CBS. Young Sheldon premiered as a special preview on September 25, 2017, and was picked up for a full season that began airing weekly on November 2, 2017. In March 2021, CBS renewed the series through to a seventh season. The seventh and final season is scheduled to premiere on February 15, 2024. In November 2023, CBS announced it would be the final season with a one-hour series finale scheduled to air on May 16, 2024. In January 2024, it was announced that a spin-off series focused on Georgie Cooper and Mandy McAllister was in development. </p>

            <button onClick={handleStream} className="btn btn-primary mx-4 my-4">Stream Now</button>
            <button onClick={handleTrailer} className="btn btn-primary mx-4 my-4">Watch Trailer</button>
          </div>

        </div>
      </div>

    </>
  )
}
