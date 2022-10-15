import React,{useState} from 'react'
import Input from './Input'
import Button from './Button'
import {Link} from 'react-router-dom'
import './App.css'
import './Signup.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth} from './utils/firebase'

const Signup = (props)=>{
        const [contact, setContact] = useState({
            displayName: '',
            email:'',
            password: '',
            confirmPassowrd:''
        })
       
    const{displayName, email, password, confrimPassword} = contact;

    console.log(contact);
    
    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }
    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        if (password !== confrimPassword){
            alert('Passwords do not match!')
            return;
        }
        try{
            const {user} = await createAuthUserWithEmailAndPassword(email,password)
            await  createUserDocFromAuth (user, {displayName});
            window.location.href='/login'
        }
        catch(error){
            console.log('error in creating user', error.message)
        }

    }

    return <div className= 'header-div'>
      <h>Create a DEV@Deakin Account</h>
      <br></br>

      <label for="name"><b>Name*</b></label>
      <Input 
       name= 'displayName'
       type= 'text'
       placeholder ='Enter Name'
       onChange = {handleChange}
       value = {contact.displayName}
       />

      <label for="email"><b>Email*</b></label>
       <Input 
       name= 'email'
       type= 'email'
       placeholder ='Enter Email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <label for="psw"><b>Password*</b></label>
       <Input 
       name='password'
       type= 'password'
       placeholder ='Enter Password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <label for="psw"><b>Confirm Password*</b></label>
       <Input 
       name='confrimPassword'
       type= 'password'
       placeholder ='Confrim Password'
       onChange = {handleChange}
       value = {contact.confrimPassword}
       />       


        <button onClick={handleSubmit}>
            Create
        </button>
        <br></br>
        <Link to = '/Login'><button className="login">Already had an account? Login</button></Link>



    </div>

}
export default Signup