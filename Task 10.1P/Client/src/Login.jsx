import React,{useState} from 'react'
import Input from './Input'
import {Link} from 'react-router-dom'
import './Login.css'
import { signInWithGooglePopup, createUserDocFromAuth, signinAuthUserWithEmailAndPassword } from './utils/firebase'
import { Button } from 'semantic-ui-react'

const Login = (props) =>{
    const logGoogleUser = async () =>{    
        try{
            const {user} = await signInWithGooglePopup();
            const userDocRef = await createUserDocFromAuth(user)
            window.location.href='/Home'
        }
        catch(error){
            console.log('F12 console: Google sign in fail', error.message)
        }
        
    }

    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const {email, password} = contact

    const handleChange = (event)=>{
        const {name,value} = event.target
        setContact ((preValue)=>{
            return{
                ...preValue,
                [name]:value
            }
        })      
    }

    const handleSubmit = async(event) =>
    {       
        event.preventDefault();       
        try{
            const response = await signinAuthUserWithEmailAndPassword(email, password);
            if(email === '' || password === '')
            {
                alert('Your email or password can not be empty')               
            }
            else{
                console.log(response);   
                console.log('Successfully log in to the account'); 
                window.location.href='/Home'
            }
        }
        catch(error){                                 
            console.log('F12 console: Data does not match with Firebase', error.message)
            alert('Incorrect Email address or password, please retry')      
        }       
    }
    return <div className= 'header-div'>
      <h>Login to Your Account</h>
      <h3 style={{float:"left"} } >Your email*</h3>
       <Input 
       name= 'email'
       type= 'text'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <h3 style={{float:"left"} } >Your password*</h3>
       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>

        <button onClick={handleSubmit}>
        <Link to='/Home'></Link>
            Login
        </button>
        <br></br>
       <button onClick={logGoogleUser}>
            Login with Google
       </button>
       <br></br>
       <Link to = '/Signup'><button className="signup">Sign Up</button></Link>

    </div>

}
export default Login