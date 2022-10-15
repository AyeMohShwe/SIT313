import React from "react";
import './App.css';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'; 
import Home from "./Home";

 
function App(){
    return(
    <div className="all">
        <Routes> 
        <Route path="/" element={<Home />} />
        <Route path='login' element= {<Login />}/>
        <Route path='signup' element= {<Signup />}/>
        <Route path='home' element={<Home/>}/>
        </Routes>

    </div>
    );

}

export default App;