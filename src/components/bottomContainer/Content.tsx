import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Description from './Description';
import Carousel from './Carousel';


const Content = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        let isContentUp = false;

        const handleScroll = ({ scroll, direction, velocity }) => {
            const content = contentRef.current;
            
            if (direction === 1 && !isContentUp) {
                content.style.transform = 'translateY(calc(-100vh + 100px))';
                content.style.transition = 'transform 1s ease-out';
                isContentUp = true;
                return;
            }
        
            if (direction === -1 && isContentUp) {
                content.style.transition = 'none';
            
                const inertia = velocity * 8; // ajustar multiplicador para cambiar la velocidad
                const newPosition = Math.min(0, scroll - inertia);
                
                content.style.transform = `translateY(calc(-100vh + 100px + ${-newPosition}px))`;
                
                if (scroll <= 5) {
                    const snapDuration = Math.min(0.4, Math.abs(velocity) * 0.5); 
                    content.style.transition = `transform ${snapDuration}s cubic-bezier(0.2, 0.7, 0.3, 1)`;
                    content.style.transform = 'translateY(0)';
                    isContentUp = false;
                }
            }
        };

        lenis.on('scroll', handleScroll);

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => {
            lenis.off('scroll', handleScroll);
            lenis.destroy();
        };
    }, []);

    return (
        <div ref={contentRef} className="my-black z-15 relative w-full h-screen" >
            <Description />
            <Carousel />
        </div>
    );
};

export default Content;