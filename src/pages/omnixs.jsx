import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./omnixs.css";
export default function Home({scrollXProgress}) {
  const x1 = useTransform(scrollXProgress, [0.4, 0.6], ["220%", "-220%"]);
  const x2 = useTransform(scrollXProgress, [0.4, 0.6], ["20%", "-20%"]);
  const x3 = useTransform(scrollXProgress, [0.4, 0.6], ["90%", "-90%"]);
  const x4 = useTransform(scrollXProgress, [0.4, 0.6], ["150%", "-150%"]);
  const x5 = useTransform(scrollXProgress, [0.4, 0.6], ["80%", "-80%"]);
  const x6 = useTransform(scrollXProgress, [0.4, 0.6], ["20%", "-20%"]);
  const x7 = useTransform(scrollXProgress, [0.4, 0.6], ["310%", "-310%"]);
  const x8 = useTransform(scrollXProgress, [0.4, 0.6], ["130%", "-130%"]);
  return (
    <div className="mains">
        <a href="http://omnixs.foxena.com/"><motion.img className="imgs2" src='/onx1.png' style={{x:x1}}></motion.img></a>
        <motion.img className="imgs" src='/onx2.png' style={{x:x2}}></motion.img>
        <motion.img className="imgs" style={{top:"-5%", x:x3}} src='/onx3.png' ></motion.img>
        <motion.img className="imgs" src='/onx4a.png' style={{x:x4}}></motion.img>
        <motion.img className="imgs" src='/onx4b.png' style={{x:x5}}></motion.img>
        <motion.img className="imgs" src='/onx4c.png' style={{x:x6}}></motion.img>
        <motion.img className="imgs" src='/onx5.png' style={{x:x7}}></motion.img>
        <div className="tops"><motion.a className="links" href="http://omnixs.foxena.com/" style={{x:x8}}>ENTERPRISE ANALYTICS<br/>& SOFTWARE SOLUTIONS</motion.a></div>
    </div>
  );
}