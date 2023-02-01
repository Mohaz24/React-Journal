import React from "react"

export default function Journal(props){
    return(
<div className="container---hero">
 <img src={props.imageUrl} className="hero---images" />
     <div className="info---section">
      <div className="hero---location">
      <img src="../images/pin.png" id="pic" width="7px"/>{props.location}
      <a href={props.googleMapUrl}>View on Google Maps</a>
      </div>
      <h2 className="hero---title">{props.title}</h2>
      <div className="info---date---section">
      <span>{props.startDate} - </span>
      <span>{props.endDate}</span>
      <p className="hero---text">{props.description}</p>
      </div>
  </div>
</div>
    )
}