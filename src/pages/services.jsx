import React, {useRef} from "react"; 
import "./services.css";
export default function Services() {
    return(
        <div className="contain">
            <h1 className="title">SERVICES WE PROVIDE</h1>
            <div className="table-container">
            <table>
                <tbody>
                <tr style={{maxheight:"4vw"}}>
                    <td><a href="http://genexis.foxena.com/"><img src="gnx1.png" alt="Company A" style={{height:"5.8vw", overflow:"hidden"}} className="imgshad"/></a></td>
                    <td>Graphics Design</td>
                    <td>Website Design</td>
                    <td>Print Media & Marketing</td>
                    <td>Visual Brand Identity</td>
                </tr>
                <tr style={{maxheight:"4vw"}}>
                    <td><a href="http://omnixs.foxena.com/"><img src="onx1.png" alt="Company B" style={{height:"4vw", overflow:"hidden"}} className="imgshad"/></a></td>
                    <td>Software Development</td>
                    <td>Enterprise Solutions</td>
                    <td>Mobile Development</td>
                    <td>Cloud App Development</td>
                </tr>
                <tr style={{maxheight:"4vw"}}>
                    <td><a href="#"><img src="fxl1.png" alt="Company C" style={{height:"4vw", overflow:"hidden"}} className="imgshad"/></a></td>
                    <td>Business Processes</td>
                    <td>Digital Consultations</td>
                    <td>Online Marketing</td>
                    <td>Outsourcing Solutions</td>
                </tr>
                <tr style={{maxheight:"4vw"}}>
                    <td><a href="http://ravines.foxena.com/"><img src="rvn1.png" alt="Company D" style={{height:"4vw", overflow:"hidden"}} className="imgshad"/></a></td>
                    <td>Web Service & Hosting</td>
                    <td>Domian Registrar</td>
                    <td>Dedicated Services</td>
                    <td>SEO, SEM, SMO & SMM</td>
                </tr>
                <tr style={{maxheight:"4vw"}}>
                    <td><a href="http://idreams.foxena.com/"><img src="idrm1.png" alt="Company E" style={{height:"4vw", overflow:"hidden"}} className="imgshad"/></a></td>
                    <td>Animation Shorts</td>
                    <td>Intro & Promos</td>
                    <td>Advertisment Creation</td>
                    <td>Visual Marketing</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}