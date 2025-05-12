import welcomeSVG from '@assets/Welcome.svg';
import Slider from './Slider';

const SliderContainer = () => {
    return(
        <div className="slider-container">
            <img 
                src={welcomeSVG}
                alt="lares img"
                aria-hidden="true"
                className="slider-img"
            />
            <Slider />
        </div>
    );
}

export default SliderContainer;