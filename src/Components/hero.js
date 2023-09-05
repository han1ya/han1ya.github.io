import React from 'react'
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import '../CSS/hero.css'

export default function Hero(){

    // const [typingDone, setTypingDone] = useState(false);
    // const handleTypingDone = () => {
    // setTypingDone(true);
    // };

    return(
    
    <div class="hero-main" id="hero"> 
    <div className="heading-section">
    <div className="intro">
    
        <Fade duration = {1000} delay = {300}><p className="name">hi, i'm haniya<br /><br /></p></Fade>
        <Fade duration = {1000} delay = {1300}><span className="name">i'm a</span></Fade>
        
            <ReactTypingEffect
                text={["\u00A0developer", "\u00A0security enthusiast", "n artist", "n explorer", "\u00A0learner"]}
                speed={100}
                typingDelay={1500}
                eraseDelay={10}
                eraseSpeed={100}
                cursorRenderer={cursor => <h1 className="cursor">{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                return (<span className="name" style={{ margin: '1px' }}>{text}</span>)}}        
            />
       
    
    </div>
    </div>
    </div>
    )
 }