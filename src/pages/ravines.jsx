import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./ravines.css";
export default function Ravines({scrollXProgress}) {
  const x1rav = useTransform(scrollXProgress, [0.7, 0.83], ["300%", "-300%"]);
  const x2rav = useTransform(scrollXProgress, [0.7, 0.83], ["450%", "-450%"]);
  const x3rav = useTransform(scrollXProgress, [0.7, 0.83], ["130%", "-130%"]);
  const x4rav = useTransform(scrollXProgress, [0.7, 0.83], ["180%", "-180%"]);
  const x5rav = useTransform(scrollXProgress, [0.7, 0.83], ["90%", "-90%"]);
  return (
    <div className="mains">
        <a href="http://ravines.foxena.com/"><motion.img className="imgrav" src='/rvn1.png' style={{x:x1rav}}></motion.img></a>
        <motion.img className="imgs" style={{zIndex:"4", height:"150%",left:"5%", x:x2rav}} src='/rvn0.png'></motion.img>
        <motion.img className="imgs" style={{zIndex:"1", height:"90%", top:"15%",x:x3rav}} src='/rvn2.png'></motion.img>
        <motion.img className="imgmid" style={{zIndex:"2",x:x4rav}}src='/rvn3.png'></motion.img>
        <motion.img className="imgtops" src='/rvn4.png' style={{x:x5rav}}></motion.img>
        <div className="tops"><motion.a className="linksrav" href="http://ravines.foxena.com/" style={{top:"22%",x:x1rav}}>ONLINE IDENTITY<br/>& WEB SERVICES</motion.a></div>
    </div>
  );
}