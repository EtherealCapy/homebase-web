import { useState } from "react";
import React from "react";

interface Section {
  label: string;
  id: string;
}

const Header: React.FC = () => {
  const [hoveredButton, setHoveredButton] = useState<number | null>(null);
  
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const sections: Section[] = [
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