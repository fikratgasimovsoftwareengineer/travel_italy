import React from "react";



function Tour ({image, data, title, description}){
    return (

        <div>
            <img src={image}></img>
            <div>{data}</div>

            <section>
                <span>
                    {title}
                   <br></br>
                    {description}
                </span>
            </section>
            
        </div>


    )

}

export default Tour;