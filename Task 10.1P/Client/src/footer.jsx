import React from "react";
import "./footer.css";
import icon1 from './assets/fb.png'
import icon2 from './assets/instagram.png'
import icon3 from './assets/twitter.png'


function footer(){
  return(<div className="Contact">
  <table className="table">
    <tr className="th">
      <th>Explore</th>
      <th>Support</th>
      <th>Stay Connected</th>
    </tr>
    <tr>
      <td><a  href="">Home</a></td>
      <td><a  href="">FAQs</a></td>
      
    </tr>
    <tr>
      <td><a  href="">Question</a></td>
      <td><a  href="">Help</a></td>
      <td><div>
      <img src={icon1}  alt="icon1" width="40" height="40"></img>
      <img src={icon2}  alt="icon2" width="40" height="40"></img>
      <img src={icon3}  alt="icon3" width="40" height="40"></img>
    </div></td>
      
    </tr>
    <tr>
    <td><a  href="">Articles</a></td>
    <td><a  href="">Contact Us</a></td>
    <td></td>
  </tr>
  <tr>
    <td><a  href="">Tutorials</a></td>
    
  </tr>
  </table>
<h1>DEV@Deakin 2022</h1>

<a href="" className="end">Privacy Policy</a >
<a href=""className="end"> Terms</a>
<a href=""className="end">Code of conduct</a>



</div>
)
}    

export default footer;