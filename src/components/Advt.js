import React from 'react'
import pb from './pbFl.jpg'
import Hopb from './Hopb2.jpg'
import Hotbbt from './Hotbbt.jpg'
import Hotwd from './Hotwd2.jpg'
import Hoac from './Hoac.jpg'
import HooldMan from './HooldMan2.jpg'

export default function Advt() {
  return (
    <>
    {/* <div classNameName="container my-4"> */}

            <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={Hotbbt} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>The big bang theory</h5>
                <p>All Seasons Streaming on Netflix</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src={Hotwd} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>The Walking Dead</h5>
                <p>All Seasons Streaming on Netflix</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src={Hopb} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Peaky Blinders</h5>
                <p>All Seasons Streaming on Netflix/Amazon Prime</p>
            </div>
            </div>

            <div className="carousel-item">
            <img src={Hoac} style={{width: 1550, height: 450}} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>Altered Carbon</h5>
                <p>Coming Soon on Netflix</p>
            </div>
            </div>

            <div className="carousel-item">
            <img src={HooldMan} style={{width: 1350, height: 450}} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
                <h5>The Old Man</h5>
                <p>Season 2 from July, 2024 on Disney+ Hotstar</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    {/* </div>     */}
    
    </>
  )
}
