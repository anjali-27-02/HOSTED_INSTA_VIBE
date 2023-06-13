import React,{useState,useEffect} from 'react';
import logo from '../img/newlogo.png';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
  const navigate=useNavigate();
  const [name, setname] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const notifyA = (msg) => toast.error(msg);
  const notifyB=(msg)=>toast.success(msg);
  const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  const PostData =() =>{
    if(!emailRegex.test(email)){
      notifyA("Invalid Email");
      return;
    }
    else if(!passwRegex.test(password)){
      notifyA("Invalid Password");
      return;
    }
    fetch("/SignUp", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password

      })
    }).then(res => res.json())
    .then(data=>{
      if(data.error){
        notifyA(data.error)
      }
      else{
        notifyB(data.message)
        navigate("/SignIn");
      }
    })

                    
  }
  return (
     
    <div className="SignUp">
    <div className="form-container">
    <div className="form">
    <img className="SignUpLogo" src={logo}></img>
    <p className="loginPara">Login To See Photos and videos <br/>from your Friends</p>    
     <div>
      <input type='email' name='email' id='email' 
      value={email} placeholder='Email' onChange={(e)=>{
        setemail(e.target.value)
      }}></input>
      
     </div>
     <div>
      <input type='text' name='name' id='name' 
      value={name}placeholder='Full Name' onChange={(e)=>{
        setname(e.target.value)
      }}></input>
      
     </div>
     <div>
      <input type='text' name='username' id='username' 
      value={userName} placeholder='UserName'onChange={(e)=>{
        setuserName(e.target.value)
      }}></input>
      
     </div>
     <div>
      <input type='password' name='password' id='password' 
      value={password} placeholder='password'onChange={(e)=>{
        setpassword(e.target.value)
      }}></input>
      
     </div>
     
    <div>
      <p className="loginP">
        By Signing Up you agree to our term and policy
      </p>
    </div>
    <input type='button' id='submit-btn' value='Sign Up' onClick={()=>{

    PostData()}}></input>
    </div>
    <div className="form2">
      Already a user ?
      <Link to="/SignIn">
      <span style={{color:"blue",cursor:"pointer"}}> Sign In</span>
      </Link>
      
    </div>
    </div>
    </div>
  )
}
