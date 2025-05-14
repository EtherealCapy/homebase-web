import { useEffect, useRef, useState, useCallback } from 'react';

// Extender la interfaz HTMLSpanElement para incluir nuestras propiedades personalizadas
declare global {
    interface HTMLSpanElement {
        _enterHandler?: () => void;
        _leaveHandler?: () => void;
    }
}
import { gsap } from 'gsap';
import DownloadBtns from './DownloadBtns';

const Title = () => {
    const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);
    const [visibleButtons, setVisibleButtons] = useState(false);

    const handleMouseEnter = useCallback((letter: HTMLSpanElement) => {
        gsap.to(letter, {
            color: '#00BCE7',
            duration: 0.2,
            ease: 'power2.out',
        });
    }, []);

    const handleMouseLeave = useCallback((letter: HTMLSpanElement) => {
        gsap.to(letter, {
            color: 'white',
            duration: 0.2,
            ease: 'power2.out',
        });
    }, []);

    useEffect(() => {
        const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
        if (letters.length === 0) return;

        gsap.set(letters, {
            opacity: 0,
            x: -50,
            scale: 0.5,
            color: 'white',
        });

        const timeline = gsap.timeline();
        
        timeline.to(letters, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.15,
            ease: 'power2.out'
        });

        timeline.to(letters, {
            color: '#00BCE7',
            duration: 0.05,
            stagger: 0.1,
            ease: 'power2.out'
        }, '>');

        timeline.to(letters, {
            color: 'white',
            duration: 0,
            stagger: 0.1,
            ease: 'power2.out'
        }, '>');

        timeline.to(letters, {
            y: -100,
            duration: 0.4,
            ease: 'sine.out',
            onComplete: () => setVisibleButtons(true)
        }, '>');

        // Agregar event listeners
        letters.forEach((letter) => {
            const enterHandler = () => handleMouseEnter(letter);
            const leaveHandler = () => handleMouseLeave(letter);
            
            letter.addEventListener('mouseenter', enterHandler);
            letter.addEventListener('mouseleave', leaveHandler);

            // Guardar referencias a las funciones para poder removerlas luego
            // Asignar manejadores de eventos como propiedades personalizadas
            letter._enterHandler = enterHandler;
            letter._leaveHandler = leaveHandler;
        });

        return () => {
            // Limpiar la animación
            timeline.kill();
            
            // Remover event listeners
            letters.forEach((letter) => {
                if (letter._enterHandler) {
                    letter.removeEventListener('mouseenter', letter._enterHandler);
                }
                if (letter._leaveHandler) {
                    letter.removeEventListener('mouseleave', letter._leaveHandler);
                }
            });
        };
    }, [handleMouseEnter, handleMouseLeave]);

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex">
                    {'HOMEBASE'.split('').map((letter, index) => {
                    // Solo asignar la referencia si el elemento no es nulo
                    const setLetterRef = (el: HTMLSpanElement | null) => {
                        if (el) {
                            lettersRef.current[index] = el;
                        }
                    };
                    
                    return (
                        <span
                            key={index}
                            ref={setLetterRef}
                            className="text-white font-bold title-font"
                        >
                            {letter}
                        </span>
                    );
                })}
                </div>
                {visibleButtons && (
                    //crear un contenedor para los botones, y los botones
                    <DownloadBtns/>
                )}
                
            </div>
        </div>
    );
};

export default Title;