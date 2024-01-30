import React from 'react'
import pbf from './components/pbFl.jpg'

export default function PeakyBlinders() {
  const handleStream = () => {
    window.open("https://www.netflix.com/in/title/80002479")
  }

  const handleTrailer = () => {
    window.open("https://www.youtube.com/watch?v=oVzVdvGIC7U&ab_channel=Alextvshows")
  }
  return (
    <>
      {/* <div className="container my-3 mx-3">
        <img src={pbf} className='img_cont' />
        <button className="btn btn-primary mx-3 my-3">Stream Now</button>
        <h1>Text 2</h1>
      </div> */}

      <div className="container mx-3 my-3">
        <div className="row">
          <div className="col card_wrapper">
            <div className="img_container">
              <img style={{ width: 400, height: 600 }} src={pbf} className='img_cont' />
            </div>
          </div>
          <div className="col" style={{ color: 'white' }}>
            <p>Peaky Blinders is a British period crime drama television series created by Steven Knight. Set in Birmingham, it follows the exploits of the Peaky Blinders crime gang in the direct aftermath of the First World War. The fictional gang is loosely based on a real urban youth gang of the same name who were active in the city from the 1880s to the 1910s.

              It features an ensemble cast led by Cillian Murphy, starring as Tommy Shelby, Helen McCrory as Elizabeth "Polly" Gray, Paul Anderson as Arthur Shelby, Sophie Rundle as Ada Shelby, and Joe Cole as John Shelby, the gang's senior members. Sam Neill, Annabelle Wallis, Iddo Goldberg, Tom Hardy, Charlotte Riley, Finn Cole, Natasha O'Keeffe, Paddy Considine, Adrien Brody, Aidan Gillen, Anya Taylor-Joy, Sam Claflin, Amber Anderson, James Frecheville, and Stephen Graham also appeared in at least one of the series. The programme began on 12 September 2013, broadcast on BBC Two until the fourth series (with repeats on BBC Four), then moved to BBC One for the fifth and sixth series.

              Netflix, under a deal with Weinstein Company and Endemol, acquired the rights to release the show in the United States and around the world. In January 2021, it was announced that the sixth series would be the last, followed by a spin-off film. The final series was broadcast in 2022.</p>

            <button onClick={handleStream} className="btn btn-primary mx-3 my-3">Stream Now</button>
            <button onClick={handleTrailer} className="btn btn-primary mx-3 my-3">Watch Trailer</button>
          </div>
        </div>
      </div>

    </>
  )
}
