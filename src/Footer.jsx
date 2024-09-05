import './Footer.css'
import image from "../public/img/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {

    return (
      <>
        <div class="boop">
          <img src={image} />
        <br />
        

        <div className="socials">
          <a href="https://www.facebook.com">
            <div><FaFacebook />&nbsp;Book a Class</div>
          </a>
          <a href="https://www.twitter.com">
          <div><FaTwitter />&nbsp;BookaClass</div>
          </a>
          <a href="https://www.instagram.com">
          <div><FaInstagram />&nbsp;BookaClass</div>
          </a>

        </div>
          <div className="cop">
            © Book a Class
          </div>
        </div>
      </>
    )
  }
  
  export default Footer