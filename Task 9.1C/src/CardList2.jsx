import React from "react";
import Card from "./Card";

import "./Card.css";
import ArrayList2 from "./ArrayList2";

function cardComponent2(tuto,i){
    return<Card 
    images = {tuto.images}
    imgname = {tuto.imgname}
    desc = {tuto.desc}
    rating={tuto.rating}
    name = {tuto.name}
/>}

const Cardlist2 = ()=>{
    return(<div className="box">
        {ArrayList2.map(cardComponent2)}
        </div>
    )
}

export default Cardlist2