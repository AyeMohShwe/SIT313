import React from "react";
import Header from "./Header";
import Banner from "./assets/DU1.jpg"
import Cardlist from "./CardList";
import Cardlist2 from "./CardList2";
import Sub from "./Sub";
import Contact from "./footer";
import "./App.css";
import "./Home.css"

const imgstyle={
    width: "100%",
    height: "600px"
}

function Home(){
    return(
        <div>
            <Header />
            <img src={Banner} alt="Banner" style={imgstyle }/><br></br>
            <h1>Featured Articles</h1>
            <Cardlist /><br></br>
            <div class="btn"><button>See all articles</button></div><br></br>
            <h1>Featured Tutorials</h1>
            <Cardlist2  /><br></br>
            <div class="btn"><button>See all tutorials</button></div><br></br>
            <Sub />
            <Contact />
        </div>
    )
}

export default Home