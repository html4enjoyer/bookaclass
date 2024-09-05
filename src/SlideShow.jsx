import './SlideShow.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image from "../public/img/flags.png"
import image2 from "../public/img/stewdents.jpg"
import image3 from "../public/img/lady.jpg"

const SlideShow = () => {
    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${image})` }}>
                    <span>Everything you need to successfully learn languages</span>
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${image2})` }}>
                    <span>Used by teachers in over 70 countries</span>
                </div>
            </div>

            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${image3})` }}>
                    <span>Over 8000 materials for levels A1-B1</span>
                </div>
            </div>
        </Slide>
    );
};

export default SlideShow;