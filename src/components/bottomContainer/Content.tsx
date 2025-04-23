import { useRef, useEffect } from 'react';
import Carousel from './Carousel';
import Description from './Description';

const Content = () => {
    return (
        <div className="my-black z-15 relative w-full h-screen">
            <Description />
            <Carousel />
        </div>
    );
};

export default Content;
