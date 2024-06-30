import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./idream.css";
export default function Idream({scrollXProgress}) {
  const x1 = useTransform(scrollXProgress, [0.65, 1], ["250%", "0%"]);
  const x2 = useTransform(scrollXProgress, [0.65, 1], ["100%", "0%"]);
  const x3 = useTransform(scrollXProgress, [0.65, 1], ["400%", "0%"]);
  const x4 = useTransform(scrollXProgress, [0.65, 1], ["75%", "0%"]);
  const x5 = useTransform(scrollXProgress, [0.65, 1], ["1000%", "0%"]);
  const x6 = useTransform(scrollXProgress, [0.65, 1], ["150%", "0%"]);
  const x7 = useTransform(scrollXProgress, [0.65, 1], ["200%", "0%"]);
  const x8 = useTransform(scrollXProgress, [0.65, 1], ["250%", "0%"]);
  
  return (
    <div className="maindrm">
        <a href="http://idreams.foxena.com/"><motion.img className="imgdrm" style={{maxHeight:"22.5%", zIndex:"2",x:x1}} src='/idrm1.png'></motion.img></a>
        <motion.img className="imgdrm" style={{Height:"100%", zIndex:"1",top:"8%",x:x2}} src='/idrm0.png'></motion.img>
        <motion.img className="imgdrm2" src='/idrm2.png' style={{x:x3}}></motion.img>
        <motion.img className="imgdrm" src='/idrm3.png' style={{x:x4}}></motion.img>
        <motion.img className="imgdrm1" src='/idrm4.png' style={{x:x5}}></motion.img>
        <motion.img className="imgdrm" src='/idrm5.png' style={{x:x6}}></motion.img>
        <motion.img className="imgdrm" style={{height:"130%",zIndex:"6",x:x7}} src='/idrm6.png'></motion.img>
        <div className="tops"><motion.a className="links" href="http://idreams.foxena.com/" style={{x:x8}} >ANIMATION<br/>& VFX STUDIO</motion.a></div>
    </div>
  );
}