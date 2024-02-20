import React from "react";

import { fouter_data_links } from "./Data";
import '../style/fouter.css'

import { HashLink as Link } from "react-router-hash-link";
import { fouter_links } from "./Data";


function Fouter(){
/* <ul className="list-fouter">   </ul>*/ 

    return(
        <div className="fouter-leg">
           <div className="list-fouter">
                {fouter_data_links.map((item)=>(
                    
                    <ul key={item.id} className="ul-container">
                           <Link smooth to={item.to}>{item.text}</Link>
                    </ul>
                ))}
         </div>

         <div className="icon-fouter">
                {fouter_links.map((item)=>(
                    <ul key={item.id} className="icon-container-fouter">
                        <li>{item.icon}</li>
                    </ul>
                ))}
         </div>

         <footer>
                <p className='copyright'>
                copyright &copy; Backroads travel tours company
                <span id='date'> {new Date().getFullYear()}</span>. all rights reserved
            </p>
         </footer>
        </div>
        
                    
    )   

}

export default Fouter; 