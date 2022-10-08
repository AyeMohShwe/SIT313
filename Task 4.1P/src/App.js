import React from "react";
import './App.css';
import Header from "./Header";
import Banner from "./assets/DU1.jpg"
import Cardlist from "./CardList";
import Cardlist2 from "./CardList2";
import Singup from "./Singup";
import Contact from "./footer";

const imgstyle={
    width: "100%",
    height: "600px"
}
 
function App(){
    return(
        <div className="body">
            <Header />
            <img src={Banner} alt="Banner" style={imgstyle }/><br></br>
            <h1>Featured Articles</h1>
            <Cardlist /><br></br>
            <button className="Button">See all articles</button><br></br>
            <h1>Featured Tutorials</h1>
            <Cardlist2  /><br></br>
            <button className="Button">See all tutorials</button><br></br>
            <Singup />
            <Contact />
        </div>
    )
}

export default App