import React from "react";
import '../style/tours.css'

import Tour from "./Tour";
import {tours_data} from '../components/Data'

import Card from 'react-bootstrap/Card';

import { NavLink as Link} from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import ColloseoTours from "../navigationComponents/ColloseoTours";

function Tours(){


    return (

        <div className="tours-main">
            <div className="tours-title">
                <h1>
                    FEATURES <span className="tours-highlight"> TOURS </span>
                </h1>
            </div>

            <div className="flex-image-tours">
                {tours_data.map((item) => (
                    
                    <Card key={item.id} style={{  width: '20rem', margin: '20px' }}>
                    
                    
                        <Card.Img variant="top" src={item.image} alt={item.title} className="card-images"/>
                    

                    <Card.Text>
                            <p className="dateof-travel">{item.data}</p>
                    </Card.Text>
                   
                    <Card.Body>

                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            <p>{item.description}</p>
                        </Card.Text>
                   
                   <div className="days-cost">
                        <Card.Text>
                                <p className="days-duration">{item.icon} {item.duration} days </p>
                                <p className="cost"> From {item.cost} {item.icon_dollar}</p>
                        </Card.Text>

                    </div>
                   
                    </Card.Body>
                    </Card>
                ))}
             </div>
            
    
        </div>
    )
}

export default Tours;