import React,{useContext}from 'react'
import logo from '../img/newlogo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContext';
export default function Navbar(login) {
  const {setmodalOpen}=useContext(LoginContext);

  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login && token) {
      return [
        <>
          <Link to="/Profile">
            <li>Profile</li>
          </Link>
          <Link to="/Createpost">Create Post</Link>
          <Link to={""}>
            <button className='primaryBtn' onClick={(e)=>{
              setmodalOpen(true)
            }}>Log Out</button>
          </Link>
        </>
      ];
    } else {
      return [
        <>
          <Link to="/SignUp">
            <li>SignUp</li>
          </Link>
          <Link to="/SignIn">
            <li>SignIn</li>
          </Link>
        </>
      ];
    }
  };
  return (
    <div className="navbar">
      <img src={logo}/>
      <ul>
        {loginStatus()}
     
      </ul>
    </div>
  )
}
