
const ServicesMap=({icon, title, text})=>{

    return (
        <li>
            <div className="icon-container">
                <div className="icon">{icon}</div>
                   
            </div>

            <div className="text-container-service">
                <p id="title">{title}</p> 
                <p id="description">{text}</p>
            </div>
        </li>

    )
}

export default  ServicesMap;