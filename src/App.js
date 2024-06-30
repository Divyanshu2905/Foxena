import './App.css';
import React, { useRef, useEffect,useState } from 'react';
import Home from './pages/home';
import Genexis from './pages/genexis';
import Omnixs from './pages/omnixs';
import Ravines from './pages/ravines';
import Idream from './pages/idream';
import Services from './pages/services';
import Support from './pages/support';
import About from './pages/about';
import HorizontalScroll from 'react-scroll-horizontal'
import { useScroll } from 'framer-motion';
import { BrowserRouter as Router,
  Routes,Route } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Main from './main';
function App() {
  const [show, setShow] = useState(false);
  function handleShow() {
    setShow(true);
  }
  return (
    <div className='apps'>
     <img className='bck' src='/bck.jpg'></img>
    <Router>
      <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Services" element={<Services/> } />
          <Route path="/Support" element={<Support/>} />
          <Route path="/About" element={<About/>}/>
      </Routes>
    </Router>
    <nav className='sticky-navbar'>
        <ul className='navbar-list'>
          <li><a href="/">Home</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="/Services">Services</a></li>
          <li><a href="/Support">Support</a></li>
          <li><a href="#" onClick={() => handleShow()}>Contact</a></li>
        </ul>
      </nav>
      <Modal show={show} fullscreen={true} animation={true} onHide={() => setShow(false)} className="custom-modal">
        <Modal.Header closeButton className="custom-modal-header">
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
        <div className="modal-content-wrapper">
            <p className="first-paragraph">For a good, thoughtful answer email us</p>
            <p className="second-paragraph">
              <span className='andu'>info@foxena.com</span><br/>
              <span className='andu2'>or</span><br/>
              <span className='andu'>request for proposal</span><br/>
              <span className='andu'>+1 (646) 233-34-53</span>
            </p>
            <p className="third-paragraph">If for some reason you wanted to hear the sound of our voice, you can call +1 (646) 233-34-53. Foxena works completely remotely. Our employees and customers are distributed around the globe.</p>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
