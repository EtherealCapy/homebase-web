import logo from '@assets/logo.png';
import { FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return(
        <section id='contact' className="footer">
            <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" style={{ width: '50px', height: '30px' }} />
                <p className="text-gray-600 hover:text-white">© 2025 Homebase App</p>
            </div>
            <div className="flex gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500">
                    <FaInstagram size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
                    <FaTwitter size={30} />
                </a>
            </div>
        </section>
    );
}

export default Footer;