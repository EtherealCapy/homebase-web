import Carousel from './Carousel';
import Description from './Description';
import SliderContainer from './SliderContainer';
import Download from './Download';
import Footer from './Footer';


const Content = () => {
    return (
        <div className="my-black z-15 relative w-full h-screen content">
            <Description /> 
            <Carousel />
            <SliderContainer />
            <Download/>
            <Footer/>
        </div>
    );
};

export default Content;
