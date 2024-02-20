import React from "react";
import mainTravelImage from '../images/main_travel.jpg';
/*import { HashLink as Link } from "react-router-hash-link";*/
import "../style/main.css"
import { NavLink } from "react-router-dom";
import {Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
function Main(){

    return (

            <div className="hero-image">
                <img src={mainTravelImage} className='main-image' alt="explore"></img>
                    <div className="hero-text">

                        <h1 className="travel-h1">Travel Agency</h1>
                      
                        <Nav.Link as={Link} smooth to ="#Tours"> 
                            <button className="btn-explore">Explore Tours</button>
                        </Nav.Link>
                     

                    </div>
            </div>
       
    )

}

export default Main;
