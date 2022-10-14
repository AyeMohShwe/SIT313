import React from "react";
import "./Card.css";


const imgstyle={
    width: "30%",
    height: "125px"
}

const Card = (props)=>{
    return(<div className="card">
   <img src={props.images} alt="artical" style={imgstyle }/>
   <h2>{props.imgname}</h2>
   <p>{props.desc}</p>
   <p><b>{props.rating}<img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Mario_star.png" alt="star" className="star"></img> {props.author}</b></p>
   <h3> {props.name}</h3>
   


     </div>

    )

}

export default Card