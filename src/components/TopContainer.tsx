import Header from '@components/Header';
import Title from '@components/Title';
import fondo4 from '@assets/fondo4.jpg';
import fondo1 from '@assets/fondo1.jpg';

const TopContainer = () => {

    //TODO: Poner imagen de fondo al div principal

    return(
        <div className="bg-cover bg-center h-screen custom-bg" style={{ backgroundImage: `url(${fondo1})` }}>
            <div className="relative z-10">
                <Header/>
                <Title/>
            </div>
        </div>
    );
}

export default TopContainer; 
