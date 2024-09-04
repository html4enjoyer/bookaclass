import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdOutlinePlayLesson } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaChalkboardTeacher } from "react-icons/fa";


function Navigation() {

    return (
      <div className='nav'>
        <h1>
          <a href="\" rel="home">
            <img src="https://ditto-online.com/wp-content/uploads/2021/06/logo-ditto-online.png"></img>
          </a>
          
          <NavLink to='/'><FaHome />Home </NavLink>
          <NavLink to='/Lessons'><MdOutlinePlayLesson />Lessons </NavLink>
          <NavLink to='/Teachers'><FaChalkboardTeacher />Teachers</NavLink>
          <NavLink to='/Contact'><FaPhoneVolume />Contact </NavLink>
        </h1>
      </div>
    )
  }
  
  export default Navigation