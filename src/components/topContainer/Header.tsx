import { useState } from "react";

const Header = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    return(
        <div className="sticky top-0 bg-transparent z-50 hidden md:block">
            <div className="flex justify-center space-x-15 py-4">
                {['INICIO', 'FUNCIONALIDADES', 'DESCARGA', 'CONTACTO'].map((text, index) => (
                    <button
                        key={index}
                        className={`text-white cursor-pointer ${
                            hoveredButton !== null && hoveredButton !== index ? 'my-blur' : ''
                        }`}
                        onMouseEnter={() => setHoveredButton(index)}
                        onMouseLeave={() => setHoveredButton(null)}
                    >
                        {text}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Header;