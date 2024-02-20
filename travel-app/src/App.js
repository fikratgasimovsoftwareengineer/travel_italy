import React from 'react';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/
import NavBar from './components/NavBar';
import Main from './components/Main';
import About from './components/About';
import Services from './components/Services';
import Tours  from './components/Tours';
import { BrowserRouter } from 'react-router-dom';

import Fouter from './components/Fouter';
import ColloseoTours from './navigationComponents/ColloseoTours';

function App(){
 
   
    return (
        <BrowserRouter>
       
            <NavBar/>

                <section id="Home">
                    <Main/> 
                </section>

                <section id="About">
                    <About/>
                </section>
                
                <section id="Services">
                    <Services/>
                </section>

                <section id="Tours">
                    <Tours/>
                </section>

            

                <section id="ColloseoTours">
                    <ColloseoTours/>
                </section>
            <Fouter/>
            
                    
        </BrowserRouter>
    )

}

export default App;

