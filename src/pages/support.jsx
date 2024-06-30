import React, {useRef} from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFortAwesome,faFacebookF,faSkype,faTwitter,faLinkedinIn,faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import "./support.css";
export default function Support() {
    return(
        <div className="containsup">
        <h1 className="titlesup">GET SUPPORT</h1>
        <div className="list-container" style={{paddingTop:"5%"}}>
          <ul className="list-column">
            <li className="list-item">
            <FontAwesomeIcon icon={faFortAwesome} size="2xl" style={{color: "#63E6BE", marginRight: "10px"}} />
              <a href="https://support.foxena.com/authentication/login"><span className="list-text">Support Hub</span> </a>
            </li>
            <li className="list-item">
            <FontAwesomeIcon icon={faFacebookF} size="2xl" style={{color: "#030bfc", marginRight: "30px"}} />
              <a href="https://www.facebook.com/foxenacorp"><span className="list-text">Facebook</span></a>
            </li>
            <li className="list-item">
            <FontAwesomeIcon icon={faSkype} size="2xl" style={{color: "#74C0FC", marginRight: "15px"}} />
              <a href="skype:ashisharma13?chat"><span className="list-text">Skype Chat</span></a>
            </li>
          </ul>
          <ul className="list-column">
            <li className="list-item">
            <FontAwesomeIcon icon={faTwitter} size="2xl" style={{color: "#74C0FC", marginRight: "25px"}} />
              <a href="https://twitter.com/foxenacorp"><span className="list-text">Twitter</span></a>
            </li>
            <li className="list-item">
            <FontAwesomeIcon icon={faLinkedinIn} size="2xl" style={{color: "#004bcc",marginRight: "25px"}} />
              <a href="https://www.linkedin.com/company/10466714"><span className="list-text">LinkedIN</span></a>
            </li>
            <li className="list-item">
            <FontAwesomeIcon icon={faGooglePlusG} size="2xl" style={{color: "#f75555",marginRight: "15px"}} />
              <a href="https://plus.google.com/+Foxena"><span className="list-text">Google+</span></a>
            </li>
          </ul>
        </div>
      </div>
    );
}