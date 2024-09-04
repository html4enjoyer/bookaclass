import './Navigation.css'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";


function Navigation() {

    return (
      <div>
        <NavLink to='/'><FaHome />Home</NavLink>
        <NavLink to='/About'>About</NavLink>
        <NavLink to='/Contact'>Contact</NavLink>
      </div>
    )
  }
  
  export default Navigation