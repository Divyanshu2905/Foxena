import React, {useRef} from "react"; 
import "./about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf,faFileZipper,faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';
export default function About() {
    return(
        <div className="containabout">
            <h1 className="titleabout">FOXENA CORPORATION</h1>
            <p className="aboutText">FOXENA is the multi-functional company which helps people and businesses in organizing IT services and providing world-class products. At Foxena, we realize the need of delivering creative solutions by using cutting-edge technologies and business models. It helps our clients to realize their full potential by having the power of latest technology available to them.
            </p>
            <ul className="list-container" >
            <li className="list-item">
                <a href="/download/corporate.ppsx">
                <FontAwesomeIcon icon={faFilePowerpoint} style={{color: "#63E6BE",marginRight:"0.5vw"}} />
                <span className="text">Corporate Overview</span>
                <span className="lighttext">(.ppsx)</span>
                </a>
            </li>
            <li className="list-item">
                <a href="/download/FoxenaCorporateOverview.pdf">
                <FontAwesomeIcon icon={faFilePdf} style={{color: "#63E6BE",marginRight:"0.5vw"}} />
                <span className="text">Corporate Overview</span>
                <span className="lighttext">(.pdf)</span>
                </a>
            </li>
            <li className="list-item">
                <a href="/download/presskit.zip">
                <FontAwesomeIcon icon={faFileZipper} style={{color: "#63E6BE",marginRight:"0.5vw"}} />
                <span className="text">Press / Media kit</span>
                <span className="lighttext">(.zip)</span>
                </a>
            </li>
            </ul>
            <div className="list-container1">
            <ul className="list-column1">
                <li className="list-item1">
                    <span className="list-text1">Cutting Edge Technology</span>
                </li>
                <li className="list-item1">
                    <span className="list-text1">Safety & Privacy</span>
                </li>
            </ul>
            <ul className="list-column1">
                <li className="list-item1">
                    <span className="list-text1">Reduce IT Cost</span>
                </li>
                <li className="list-item1">
                    <span className="list-text1">Quality of Products & Services</span>
                </li>
            </ul>
        </div>
        </div>
    );
}