import './App.css';
import React from 'react';
import Home from './pages/home';
import Genexis from './pages/genexis';
import Omnixs from './pages/omnixs';
import Ravines from './pages/ravines';
import Idream from './pages/idream';
import Services from './pages/services';
import Support from './pages/support';
import About from './pages/about';
function App() {
  return (
    <div className='apps'>
      <img className='bck' src='/bck.jpg'></img>
      {/* <Home/> */}
      {/* <Genexis/> */}
      {/* <Omnixs/> */}
      {/* <Ravines/>  */}
      {/* <Idream/> */}
      {/* <Services/> */}
      {/* <Support/> */}
      <About/>
    </div>
  );
}

export default App;
