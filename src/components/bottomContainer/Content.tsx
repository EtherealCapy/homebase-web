import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import Description from './Description';


const Content = () => {
    const contentRef = useRef(null);

    useEffect(() => {
        // Inicializa Lenis
        const lenis = new Lenis({
            duration: 0.8, // Duración del scroll suave (no es crítico en este caso)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de aceleración
        });

        let isContentUp = false;

        // Función para manejar el scroll
        const handleScroll = ({ scroll, direction }) => {
            const content = contentRef.current;
            
            if (direction === 1 && !isContentUp) { // Scroll hacia abajo
                // Mueve el contenido hacia arriba rápidamente
                content.style.transform = 'translateY(-100vh)';
                content.style.transition = 'transform 1s ease-out';
                isContentUp = true; // Marca que el contenido está arriba
            } else if (direction === -1 && isContentUp) { // Scroll hacia arriba
                // Mueve el contenido hacia abajo rápidamente
                content.style.transform = 'translateY(0)';
                content.style.transition = 'transform 1s ease-out';
                isContentUp = false; // Marca que el contenido está abajo
            }
        };

        // Escucha el evento de scroll
        lenis.on('scroll', handleScroll);

        // Función para actualizar Lenis en cada frame
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Limpia el efecto al desmontar el componente
        return () => {
            lenis.off('scroll', handleScroll);
            lenis.destroy();
        };
    }, []);

    return (
        <div ref={contentRef} className="my-black z-15 relative w-full h-screen" >
            <Description />
        </div>
    );
};

export default Content;