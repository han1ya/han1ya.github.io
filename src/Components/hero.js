import React from 'react'
import ReactTypingEffect from 'react-typing-effect';
import '../CSS/hero.css'
//import Box from './3dBox';
import {Canvas} from "@react-three/fiber"
import * as THREE from 'three';

export default function Hero(){
    return(
    
    <div class="hero-main" id="hero"> 
    <div className="heading-section">
    <div className="intro">
        <div>
           <ReactTypingEffect
                text={["hi, i'm haniya"]}
                speed={100}
                typingDelay={50}
                eraseDelay={Infinity}
                eraseSpeed={Infinity}
                cursorRenderer={cursor => <h1 className="cursor">{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                return (<p className="name">{text}<br /><br /></p>)}}        
      />
        
        <ReactTypingEffect
                text={["developer", "security enthusiast", "n artist", "n explorer", "learner"]}
                speed={100}
                typingDelay={1000}
                eraseDelay={1000}
                eraseSpeed={100}
                cursorRenderer={cursor => <h1 className="cursor">{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                return (<p className="name">i'm a{text}</p>)}}        
      />
           {/* <Canvas className="box-object">
               <Box/>
               
               </Canvas> */}
         </div>
    </div>
    </div>
    </div>
    )
 }