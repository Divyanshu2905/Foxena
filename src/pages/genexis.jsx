import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./genexis.css";
export default function Genexis() {
  return (
    <div className="mains">
        <img className="imgs1" src='/gnx2.png'></img>
        <a href="http://genexis.foxena.com/"><img className="imgs3" src='/gnx1.png'></img></a>
        <div className="tops"><a className="links" href="http://genexis.foxena.com/">STRATEGIC BRANDING<br/>& GRAPHIC DESIGN STUDIO</a></div>
    </div>
  );
}