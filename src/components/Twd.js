import React from 'react'
import twdFl from './TwdFl2.jpg'

export default function Twd() {

  const handleStream = () => {
    window.open("https://www.netflix.com/in/title/70177057")
  }

  const handleTrailer = () => {
    window.open("https://www.youtube.com/watch?v=sfAc2U20uyg&ab_channel=TrailerBlend")
  }

  return (
    <>
      {/* <div className="container my-3 mx-3 side side-content-center">
        <img src={twdFl} alt='twd' style={{ width: 400, height: 600 }} />
        <h1>Text 1</h1>



      </div> */}

      <div className="container mx-3 my-3 ">
        <div className="row ">
          <div className="col card_wrapper">
            <div className="img_container">
              <img style={{ width: 400, height: 600 }} className='img_cont' src={twdFl} alt='twd' />
            </div>
          </div>
          <div className="col">
            <p style={{ color: 'white' }}>The Walking Dead is an American post-apocalyptic horror drama television series based on the comic book series of the same name by Robert Kirkman, Tony Moore, and Charlie Adlard. Together, the show and the comic book series form the core of The Walking Dead franchise. The series features a large ensemble cast as survivors of a zombie apocalypse trying to stay alive under near-constant threat of attacks from zombies known as "walkers". With the collapse of modern civilization, these survivors must confront other human survivors who have formed groups and communities with their own sets of laws and morals, sometimes leading to open conflict between them. The series is the first television series within The Walking Dead franchise.

              The Walking Dead premiered on October 31, 2010. It was exclusively broadcast on cable channel AMC in the United States and internationally through the Fox Networks Group and Disney+. The series concluded on November 20, 2022, after eleven seasons and 177 episodes. Andrew Lincoln played the lead character of Rick Grimes until his departure from the show in the ninth season. Other long-standing cast members included Norman Reedus, Steven Yeun, Chandler Riggs, Melissa McBride, Lauren Cohan, Danai Gurira, Josh McDermitt, Christian Serratos, Seth Gilliam, Ross Marquand and Jeffrey Dean Morgan. The Walking Dead was produced by AMC Studios in the state of Georgia, with most filming having taken place in the outdoor spaces of Riverwood Studios near Senoia, Georgia.

              The Walking Dead became known as AMC's flagship series[3][4] and as a ratings juggernaut.[5][6] Beginning with its third season, The Walking Dead attracted the most 18- to 49-year-old viewers of any cable or broadcast television series. The series was positively received by critics.[7] It was nominated for several awards, including the Golden Globe Award for Best Television Series – Drama and the Writers Guild of America Award for New Series.[8][9] The show's viewership declined during later seasons.

              AMC has created a franchise of related media, including the spin-off series Fear the Walking Dead (2015–23), The Walking Dead: World Beyond (2020–21), Tales of the Walking Dead (2022), The Walking Dead: Dead City (2023–present) and The Walking Dead: Daryl Dixon (2023–present) as well as several webisodes and video games. An additional spinoff has been announced: The Walking Dead: The Ones Who Live (2024).
            </p>

            <button onClick={handleStream} className="btn btn-primary mx-4 my-4">Stream Now</button>
            <button onClick={handleTrailer} className="btn btn-primary mx-4 my-4">Watch Trailer</button>
          </div>

        </div>
      </div>

    </>
  )
}
