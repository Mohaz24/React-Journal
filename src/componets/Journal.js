import React from "react"

export default function Journal({journal}){
    return(
        <div className="container---hero">
        <img src={journal.imageUrl} className="hero---images" />
        <div className="info---section">
            <div className="hero---location">
                <img src="../images/pin.png" id="pic" width="7px" />
                {journal.location}
                <a href={journal.googleMapUrl}>View on Google Maps</a>
            </div>
            <h2 className="hero---title">{journal.title}</h2>
            <div className="info---date---section">
                <span>{journal.startDate} - </span>
                <span>{journal.endDate}</span>
                <p className="hero---text">{journal.description}</p>
            </div>
        </div>
    </div>
    
    )
}