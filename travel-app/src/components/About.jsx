import React from "react";
import aboutImage from "../images/about.jpeg"
import "../style/about.css"

function About(){

    return (

        <div className="about-div">
            
            <img src={aboutImage} className="about-img-src"></img>

            <h1 className="about-title"> ABOUT <span className="highlight">US</span> </h1>

            <div className="about-text-info">

                <h3>Explore The Difference </h3>
                
                <p className="text-fit"> 
                
                   <span className="style-about"> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur
                    quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                    unde dolor?
                    <br></br>
                    <br></br>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
                    quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
                    unde dolor?
                    </span>

                </p>
                <button><span>READ MORE</span></button>
            </div>
        </div>
        
    )

}
export default About;