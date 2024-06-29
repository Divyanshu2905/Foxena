import React, { useRef } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import "./home.css";

export default function Home() {
  const ref = useRef(null);
  const { scrollX} = useScroll({
    target: ref,
    axis: "x",
    offset:["start start","start end"],
  });
  useMotionValueEvent(scrollX,"change", (latest) => {
    console.log(latest);
  })
  const x1 = useTransform(scrollX, [0, 1], ["0%", "100%"]);
  const x2 = useTransform(scrollX, [0, 1], ["0%", "200%"]);
  const x3 = useTransform(scrollX, [0, 1], ["0%", "300%"]);
  const x4 = useTransform(scrollX, [0, 1], ["0%", "400%"]);
  return (
    <div className="mains" ref={ref}>
      <motion.img className="imgs" src="/main1.png" style={{ x: x1 }} />
      <motion.img className="imgs" src="/main2.png" style={{ x: x2 }} />
      <motion.img className="imgs" src="/main3.png" style={{ x: x3 }} />
      <motion.img className="imgs" src="/main4.png" style={{ x: x4 }} />
    </div>
  );
}

