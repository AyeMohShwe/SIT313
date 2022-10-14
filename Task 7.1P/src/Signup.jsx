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
        }
        catch(error){
            console.log('error in creating user', error.message)
        }

    }

    return <div className= 'header-div'>
      
      <Input 
       name= 'displayName'
       type= 'text'
       placeholder ='name'
       onChange = {handleChange}
       value = {contact.displayName}
       />
      
      <br></br>
       <Input 
       name= 'email'
       type= 'email'
       placeholder ='email'
       onChange = {handleChange}
       value = {contact.email}
       />

       <br></br>

       <Input 
       name='password'
       type= 'password'
       placeholder ='password'
       onChange = {handleChange}
       value = {contact.password}
       />

       <br></br>
       <Input 
       name='confrimPassword'
       type= 'password'
       placeholder ='confrim password'
       onChange = {handleChange}
       value = {contact.confrimPassword}
       />       

       <br></br>

        <button onClick={handleSubmit}>
            <Link to='/login'>
            Signup
            </Link>
        </button>

       <br></br>
       <br></br>

        <Link to='/login'>
            Login
        </Link>



    </div>

}
export default Signup