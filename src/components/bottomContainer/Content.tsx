import { useRef, useEffect } from 'react';
import Carousel from './Carousel';
import Description from './Description';
import SliderContainer from './SliderContainer';

const Content = () => {
    return (
        <div className="my-black z-15 relative w-full h-screen content">
            <Description /> 
            <Carousel />
            <SliderContainer />
        </div>
    );
};

export default Content;
