import './main.css';
import React, { useRef, useEffect } from 'react';
import Home from './pages/home';
import Genexis from './pages/genexis';
import Omnixs from './pages/omnixs';
import Ravines from './pages/ravines';
import Idream from './pages/idream';
import { useScroll } from 'framer-motion';
export default function Main() {
  const container = useRef(null);
  const target1 = useRef(null);
  const target2 = useRef(null);
  const target3 = useRef(null);
  const target4 = useRef(null);
  const target5 = useRef(null);
  const {scrollXProgress:scrollXProgress1}=useScroll({
    target:target1,
    container:container
  })
  const {scrollXProgress:scrollXProgress2}=useScroll({
    target:target2,
    container:container,
  })
  const {scrollXProgress:scrollXProgress3}=useScroll({
    target:target3,
    container:container
  })
  const {scrollXProgress:scrollXProgress4}=useScroll({
    target:target4,
    container:container
  })
  const {scrollXProgress:scrollXProgress5}=useScroll({
    target:target5,
    container:container
  })
  return (
      <div className='horizontal-container' ref={container}>
        <Home ref={target1} scrollXProgress={scrollXProgress1}/>
        <Genexis ref={target2} scrollXProgress={scrollXProgress2}/>
        <Omnixs ref={target3} scrollXProgress={scrollXProgress3}/>
        <Ravines ref={target4} scrollXProgress={scrollXProgress4}/> 
        <Idream ref={target5} scrollXProgress={scrollXProgress5}/>
      </div>

  );
}
