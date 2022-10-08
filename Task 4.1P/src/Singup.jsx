import React from "react";
import './Singup.css';


function Singup(){
return(
    <div className="header">

    <div className="text"><h1>SIGN UP FOR OUR DAILY INSIDER</h1></div>
    <div className="input"><input type="text" placeholder="Enter your email" className="email"   /></div>
    <button className="sub"> Subscribe</button>

    </div>
)
}

export default Singup