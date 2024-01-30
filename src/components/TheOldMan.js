import React from 'react'
import Olm from './Theol.jpg'
export default function TheOldMan() {

  const handleStream = () => {
    window.open("https://www.hotstar.com/in/tv/the-old-man/1260107103")
  }

  const handleTrailer = () => {
    window.open("https://www.youtube.com/watch?v=bFa81QVYObI-old-man/1260107103")
  }

  return (



    <>
      {/* <div className="container mx-3 my-3">
      
    </div> */}

      <div className="container my-3 mx-3">
        <div className="row">
          <div className="col">
            <img src={Olm} style={{ width: 400, height: 600 }} />
          </div>
          <div className="col">
            <p style={{ color: 'white' }}>The Old Man is an American drama thriller television series based on the 2017 novel The Old Man by Thomas Perry. It was developed by Jonathan E. Steinberg and Robert Levine and premiered on FX on June 16, 2022.[2] The first season consists of seven episodes.[3] Following its premiere, the series was renewed for a second season.[4]</p>

            <button onClick={handleStream} className="btn btn-primary mx-4 my-4">Stream Now</button>
            <button onClick={handleTrailer} className="btn btn-primary mx-4 my-4">Watch Trailer</button>
          </div>

        </div>
      </div>

    </>
  )
}
