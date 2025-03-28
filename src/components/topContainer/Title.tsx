import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import DownloadBtns from './DownloadBtns';

const Title = () => {
    const lettersRef = useRef([]);

    const [visibleButtons, setVisibleButtons] = useState(false);

    useEffect(() => {
        const letters = lettersRef.current;

        gsap.set(letters, {
            opacity: 0,
            x: -50,
            scale: 0.5,
            color: 'white',
        });

        gsap.to(letters, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.15,
            ease: 'power2.out',
            onComplete: () => {
                gsap.fromTo(
                    letters,
                    { color: 'white' },
                    {
                        color: '#00BCE7',
                        duration: 0.05,
                        stagger: 0.1,
                        ease: 'power2.out',
                        onComplete: () => {
                            gsap.to(letters, {
                                color: 'white',
                                duration: 0,
                                stagger: 0.1,
                                ease: 'power2.out',
                                onComplete: () => {
                                    gsap.to(letters, {
                                        y: -100, 
                                        duration: 0.4,
                                        ease: 'sine.out', 
                                        onComplete: () => {
                                            setVisibleButtons(true);
                                        },
                                    });
                                },
                            });
                        },
                    }
                );
            },
        });
        

        letters.forEach((letter) => {
            letter.addEventListener('mouseenter', () => {
                gsap.to(letter, {
                    color: '#00BCE7',
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });

            letter.addEventListener('mouseleave', () => {
                gsap.to(letter, {
                    color: 'white',
                    duration: 0.2,
                    ease: 'power2.out',
                });
            });
        });

        return () => {
            letters.forEach((letter) => {
                letter.removeEventListener('mouseenter', () => {});
                letter.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="flex">
                    {'HOMEBASE'.split('').map((letter, index) => (
                        <span
                            key={index}
                            ref={(el) => (lettersRef.current[index] = el)}
                            className="text-white font-bold title-font"
                        >
                            {letter}
                        </span>
                    ))}
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