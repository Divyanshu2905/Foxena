import React, {useRef} from "react"; 
import {motion,useScoll,useTransform} from "framer-motion";
import "./home.css";
export default function Home() {
  return (
    <div className="mains">
        <img className="imgs" src='/main1.png'></img>
        <img className="imgs" src='/main2.png'></img>
        <img className="imgs" src='/main3.png'></img>
        <img className="imgs" src='/main4.png'></img>
    </div>
  );
}