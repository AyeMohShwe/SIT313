import React from "react";
import './Header.css';

function Header(){
return(
<div className="header">
<div className="Banner"><h1>DEV@Deakin</h1></div>
<div className="ui icon input"><input type="text" placeholder="Search..."/><i aria-hidden="true" class="search icon"></i></div>
<button className="post"> Post</button> <button className="login">Login</button>


</div>
)


}

export default Header