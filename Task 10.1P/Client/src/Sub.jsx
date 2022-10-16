import React from "react";
import './Sub.css';

function Sub() {
    return (
        <div class="header2">
            <div class="title2"><h1>SIGN UP FOR OUR DAILY INSIDER</h1></div>
            <form class="link" method="post" action="http://localhost:3002/">
            <input type="text" placeholder="Enter your email" name="email" />
            <button class="sub" type="submit"> Subscribe</button>
            </form>
        </div>
    )
}

export default Sub