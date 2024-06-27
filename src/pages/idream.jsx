import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./idream.css";
export default function Idream() {
  return (
    <div className="maindrm">
        <a href="http://idreams.foxena.com/"><img className="imgdrm" style={{maxHeight:"22.5%", zIndex:"2"}} src='/idrm1.png'></img></a>
        <img className="imgdrm" style={{Height:"100%", zIndex:"1",top:"8%"}} src='/idrm0.png'></img>
        <img className="imgdrm2" src='/idrm2.png'></img>
        <img className="imgdrm" src='/idrm3.png'></img>
        <img className="imgdrm1" src='/idrm4.png'></img>
        <img className="imgdrm" src='/idrm5.png'></img>
        <img className="imgdrm" style={{height:"130%",zIndex:"6"}} src='/idrm6.png'></img>
        <div className="tops"><a className="links" href="http://idreams.foxena.com/" >ANIMATION<br/>& VFX STUDIO</a></div>
    </div>
  );
}