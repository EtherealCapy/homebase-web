import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
    const carouselRef = useRef(null);
    const mockUpRefs = [useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        mockUpRefs.forEach(ref => {
            if (ref.current) {
                gsap.set(ref.current, {
                    scale: 0.5,
                    y: 100,
                    willChange: 'transform'
                });
            }
        });

        const ctx = gsap.context(() => {
            setTimeout(() => {
                mockUpRefs.forEach(ref => {
                    if (!ref.current) return;

                    const element = ref.current;

                    gsap.fromTo(element,
                        {
                            scale: 0.5,
                            y: 100
                        },
                        {
                            scale: 1,
                            y: 0,
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: element,
                                start: "top bottom",
                                end: "center center",
                                scrub: 1.5
                            }
                        }
                    );

                    gsap.fromTo(element,
                        {
                            scale: 1,
                            y: 0
                        },
                        {
                            scale: 0.5,
                            y: -100,
                            ease: "power2.in",
                            scrollTrigger: {
                                trigger: element,
                                start: "center center",
                                end: "bottom top",
                                scrub: 1.5
                            }
                        }
                    );
                });

                ScrollTrigger.refresh();
            }, 30);
        }, carouselRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="utilities" className="carousel" ref={carouselRef}>
            {mockUpRefs.map((ref, index) => (
                <div 
                    key={`mockUp${index+1}`}
                    className={`mockUp${index+1}`}
                    ref={ref}
                    style={{ willChange: 'transform' }}
                />
            ))}
        </section>
    );
};

export default Carousel;