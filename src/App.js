import './App.css';
import React, { useRef, useEffect } from 'react';
import Home from './pages/home';
import Genexis from './pages/genexis';
import Omnixs from './pages/omnixs';
import Ravines from './pages/ravines';
import Idream from './pages/idream';
import Services from './pages/services';
import Support from './pages/support';
import About from './pages/about';
import HorizontalScroll from 'react-scroll-horizontal'
function App() {

  const child = {height: `100%`}
  return (
    <div className='apps'>
      <img className='bck' src='/bck.jpg'></img>
      <div className='horizontal-container'>
        <Home/>
        <Genexis/>
        <Omnixs/>
        <Ravines/> 
        <Idream/>
        {/* <Services/> */}
        {/* <Support/> */}
        {/* <About/> */}
      </div>
      
    </div>
  );
}

export default App;
