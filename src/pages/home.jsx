import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform,useSpring } from "framer-motion";
import "./home.css";

export default function Home({scrollXProgress}) {
  var x1 = useTransform(scrollXProgress, [0, 0.2], ["0%", "-60%"]);
  var x2 = useTransform(scrollXProgress, [0, 0.2], ["0%", "-150%"]);
  var x3 = useTransform(scrollXProgress, [0, 0.2], ["0%", "-600%"]);
  var x4 = useTransform(scrollXProgress, [0, 0.2], ["0%", "-900%"]);
  return (
    <div className="mains">
      <motion.img className="imgs" src="/main1.png" style={{ x: x1 }} />
      <motion.img className="imgs" src="/main2.png" style={{ x: x2 }} />
      <motion.img className="imgs" src="/main3.png" style={{ x: x3 }} />
      <motion.img className="imgs" src="/main4.png" style={{ x: x4 }} />
    </div>
  );
}

