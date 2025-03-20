import Header from '@/components/topContainer/Header';
import Title from '@/components/topContainer/Title';
import fondo4 from '@assets/fondo4.jpg';
import fondo1 from '@assets/fondo1.jpg';

const TopContainer = () => {

    //TODO: Poner imagen de fondo al div principal

    return(
        <div className="bg-cover bg-center h-screen w-full custom-bg fixed top-0 left-0" style={{ backgroundImage: `url(${fondo1})` }}>
            <div className="relative z-1">
                <Header/>
                <Title/>
            </div>
        </div>
    );
}

export default TopContainer; 
