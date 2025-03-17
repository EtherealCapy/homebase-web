import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Title = () => {
    const lettersRef = useRef([]); 

    // Animación de entrada con GSAP
    useEffect(() => {
        const letters = lettersRef.current;

        gsap.set(letters, {
            opacity: 0,
            x: -50,
            scale: 0.5,
        });

        gsap.to(letters, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.15, 
            ease: 'power2.out', 
        });
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex  ">
                {'HOMEBASE'.split('').map((letter, index) => (
                    <span
                        key={index}
                        ref={(el) => (lettersRef.current[index] = el)} // Asignar referencia
                        className="text-white font-bold transition-colors duration-200 hover:text-[#00BCE7] title-font"
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Title;