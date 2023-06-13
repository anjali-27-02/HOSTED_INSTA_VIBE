import React,{useState,useEffect} from 'react'
import anjali from '../img/Anjali.jpeg';
import './profile.css';
export default function Profile() {
  const [pic, setpic] = useState([]);
  useEffect(() => {
    fetch("/myposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        setpic(result);
      });
  }, []);
  
  return (
    <div className='profile'>
    <div className='profile-frame'>
    <div className='profile-pic'>
    <img src={anjali}/>
    </div>
    <div className='profile-data'>
      <h1>{JSON.parse(localStorage.getItem("user")).name}</h1>
      <div className='profile-info' style={{display:"flex"}}>
        <p>6 post</p>
        <p>512 followers</p>
        <p>300 following</p>
      </div>
    </div>

    </div>
    <hr style={{ width:"100%",
    opacity:"0.8",
    margin:"25px auto"}}/>
    <div className="gallery">
        {pic.map((pics) => {
          return <img src={pics.photo }className="item"></img>;
        })}
    </div>
    </div>
  )
}
