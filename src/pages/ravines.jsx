import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./ravines.css";
export default function Ravines() {
  return (
    <div className="mains">
        <a href="http://ravines.foxena.com/"><img className="imgrav" src='/rvn1.png'></img></a>
        <img className="imgs" style={{zIndex:"4", height:"150%",left:"5%"}} src='/rvn0.png'></img>
        <img className="imgs" style={{zIndex:"1", height:"90%", top:"15%"}} src='/rvn2.png'></img>
        <img className="imgmid" style={{zIndex:"2"}}src='/rvn3.png'></img>
        <img className="imgtops" src='/rvn4.png'></img>
        <div className="tops"><a className="links" href="http://ravines.foxena.com/" style={{top:"22%"}}>ONLINE IDENTITY<br/>& WEB SERVICES</a></div>
    </div>
  );
}