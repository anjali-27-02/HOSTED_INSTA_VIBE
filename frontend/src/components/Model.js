import React from 'react'
import {RiCloseLine} from "react-icons/ri";
import './modal.css';
import { useNavigate } from 'react-router-dom';
export default function Model({setmodalOpen}) {
  const navigate=useNavigate()
  return (
    <div className='darkBg' onClick={()=>setmodalOpen(false)}>
    <div className='centered'>
    <div className='modal'>

      <div className='modalHeader'>
          <h5 className='heading'>Confirm</h5>
      </div>
      <button className='closeBtn' onClick={()=>setmodalOpen(false)}>
         <RiCloseLine></RiCloseLine>
      </button>
      <div className='modalContent'>
        Are you really want to log out?
      </div>
      <div className='modalActions'>
      <div className='actionsContainer'>
        <button className='LogOutBtn' onClick={()=>{
          setmodalOpen(false);
          localStorage.clear()
          navigate("/SignIn")
        }}>
            Log Out
        </button>
        <button className='CancelBtn' onClick={()=>setmodalOpen(false)}>Cancel</button>
      </div>
       </div>
    </div>
    </div>
    </div>

  )
}
