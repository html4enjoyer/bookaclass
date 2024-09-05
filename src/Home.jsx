import './Home.css'
import SlideShow from "./SlideShow";
import image from "../public/img/lessons.jpg"
import image2 from "../public/img/teachers.jpg"
import image3 from "../public/img/contact.png"

function Home() {

    return (
      <>
          <SlideShow />

          <div className="contai">
            <div className="row">
              <div className="card">
                <a href="\Lessons" rel="home">
                  <img src={image} />
                  <div className="desc">
                  <p className="font">
                      <strong>Check out our lessons</strong>
                    </p>
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="\Teachers" rel="home">
                  <img src={image2} />
                  <div className="desc">
                  <p className="font">
                      <strong>Check out our teachers</strong>
                    </p>
                  </div>
                </a>
              </div>
              <div className="card">
                <a href="\Contact" rel="home">
                  <img src={image3} />
                  <div className="desc">
                  <p className="font">
                      <strong>Contact us</strong>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
      </>
    )
  }
  
export default Home