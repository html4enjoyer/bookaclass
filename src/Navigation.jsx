import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";
import image from "../public/img/logo.png"


function Navigation() {

    return (
      

      <div className='nav' >
        <div className='imageContainer'>

          <a href="\" rel="home">
            <img src={image} />
          </a>
        </div>
          <div className='navBar'>

          <NavLink to='/'><FaHome />Home </NavLink>
          <NavLink to='/Lessons'><MdOutlinePlayLesson />Lessons </NavLink>
          <NavLink to='/Teachers'><FaChalkboardTeacher />Teachers</NavLink>
          <NavLink to='/Contact'><FaPhoneVolume />Contact </NavLink>
          </div>
        
      </div>
     
    )
  }
  
  export default Navigation