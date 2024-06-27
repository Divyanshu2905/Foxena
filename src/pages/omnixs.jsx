import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./omnixs.css";
export default function Home() {
  return (
    <div className="mains">
        <a href="http://omnixs.foxena.com/"><img className="imgs2" src='/onx1.png'></img></a>
        <img className="imgs" src='/onx2.png'></img>
        <img className="imgs" style={{top:"-5%"}} src='/onx3.png'></img>
        <img className="imgs" src='/onx4a.png'></img>
        <img className="imgs" src='/onx4b.png'></img>
        <img className="imgs" src='/onx4c.png'></img>
        <img className="imgs" src='/onx5.png'></img>
        <div className="tops"><a className="links" href="http://omnixs.foxena.com/">ENTERPRISE ANALYTICS<br/>& SOFTWARE SOLUTIONS</a></div>
    </div>
  );
}