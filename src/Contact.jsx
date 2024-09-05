import './Contact.css'
import { MdPhoneIphone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

function Contact() {

    return (
      <div>
        <h1 className="con">Contact us!</h1>
        <h2 className='ri'><MdPhoneIphone />Text or Call </h2>
        <h2 className='le'><CiLocationOn />Visit us</h2>
        <br></br>
        <br></br>
        
        <h3 className='ri2'>contact@bookaclass.com</h3>
        <h3 className='li2'>ul. 9 Maja 20/4</h3><br></br>
        <h3 className='ri3'>+48 203 982 347</h3>
        <h3 className='li3'>Wrocław</h3>
        
      </div>
    )
  }
  
  export default Contact