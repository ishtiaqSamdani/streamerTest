import Navbar from "./components/Navbar";
import Twd from "./components/Twd";
import Advt from "./components/Advt";
import PeakyBlinders from "./PeakyBlinders";
import YoungSheldon from "./YoungSheldon";
import TheOldMan from "./components/TheOldMan";
import './App.css'
import AlteredCarbon from "./components/AlteredCarbon";
import { useState } from "react";

function App() {


  const [mode, setMode] = useState('dark')
  const [btn, setBtn] = useState('Enable light mode')
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setBtn('Enable OG mode')
      // document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'

    } else {
      setMode('dark')
      setBtn('Enable light mode')
      // document.body.style.backgroundColor = 'black'
      // document.body.style.color = 'white'
    }
  }

  let myStyle = {
    backgroundColor: 'black'
  }


  return (
    <>
      <div style={myStyle}>
        <Navbar title='Streamer' mode={mode} toggleMode={toggleMode} btn={btn} />
        <Advt />


        <Twd />
        <hr style={{ color: 'white' }} />
        <PeakyBlinders />
        <hr style={{ color: 'white' }} />
        <YoungSheldon />
        <hr style={{ color: 'white' }} />
        <TheOldMan />
        <hr style={{ color: 'white' }} />
        <AlteredCarbon />
        <hr style={{ color: 'white' }} />

        <p style={{ textAlign: 'center', color: 'white' }}>Website for Education purposes</p>
        <p style={{ textAlign: 'center', color: 'white' }}>Reach out to us at Streamer@streamer.com</p>

      </div >
    </>
  );
}

export default App;
