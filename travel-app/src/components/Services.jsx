import React from "react";

import "../style/services.css"
import { service_data } from "./Data";
import ServicesMap from "./ServicesMap";


function Services(){

    return (

        <div className="center-service">
            <div className="text-service">
                <h1>
                    OUR <span className="highlight-service">SERVICES</span>
                </h1>
            </div>
            <ul className="service-info">
                {service_data.map((item)=>(
                    <ServicesMap 
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                    />
                ))}

            </ul>
        </div>
    )

}

export default Services;