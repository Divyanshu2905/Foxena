import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./genexis.css";
export default function Genexis({scrollXProgress}) {
  const x1 = useTransform(scrollXProgress, [0.2, 0.4], ["0%", "-10%"]);
  const x2 = useTransform(scrollXProgress, [0.1, 0.4], ["200%", "-300%"]);
  const x3 = useTransform(scrollXProgress, [0.1, 0.4], ["300%", "-300%"]);
  return (
    <div className="mains">
        <motion.img className="imgs1" src='/gnx2.png' style={{x:x1}}></motion.img>
        <a href="http://genexis.foxena.com/"><motion.img className="imgs3" src='/gnx1.png' style={{x:x2}}></motion.img></a>
        <div className="tops"><motion.a className="linksgen" href="http://genexis.foxena.com/" style={{zIndex:"10", x:x3}}>STRATEGIC BRANDING<br/>& GRAPHIC DESIGN STUDIO</motion.a></div>
    </div>
  );
}