import React from "react";
import Card from "./Card";

import "./Card.css";
import ArrayList from "./ArrayList";

function cardComponent1(article,i){
    return<Card 
    images = {article.images}
    imgname = {article.imgname}
    desc = {article.desc}
    rating={article.rating}
    name = {article.name}
/>
}

const Cardlist = ()=>{
    return(<div className="box">
        {ArrayList.map(cardComponent1)}
        </div>
    )
}
export default Cardlist