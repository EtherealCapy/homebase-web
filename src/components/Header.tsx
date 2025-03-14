import { useState } from "react";

const Header = () => {
    const [hoveredButton, setHoveredButton] = useState(null);

    return(
        <div className="sticky top-0 bg-transparent z-50">
            <div className="flex justify-center space-x-6 py-4">
                {['INICIO', 'FUNCIONALIDADES', 'DESCARGA', 'CONTACTO'].map((text, index) => (
                    <button
                        key={index}
                        className={`text-white ${
                            hoveredButton !== null && hoveredButton !== index ? 'blur-sm' : ''
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