import { useState } from "react";

const Header = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const sections = [
        { label: 'INICIO', id: 'home' },
        { label: 'FUNCIONALIDADES', id: 'utilities' },
        { label: 'DESCARGA', id: 'download' },
        { label: 'CONTACTO', id: 'contact' },
    ];

    return (
        <section id="home" className="sticky top-0 bg-transparent z-50 hidden md:block">
            <div className="flex justify-center space-x-15 py-4">
                {sections.map(({ label, id }, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(id)}
                        className={`text-white cursor-pointer ${
                            hoveredButton !== null && hoveredButton !== index ? 'my-blur' : ''
                        }`}
                        onMouseEnter={() => setHoveredButton(index)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </section>
    );
};


export default Header;