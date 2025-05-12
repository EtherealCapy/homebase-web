import appbtn from '@assets/app_store_button.png';
import playbtn from '@assets/play_store_button.png';

const Download = () => {
    return (
        <div className="download flex flex-col items-center text-center">
            <h2>¡Descárgala ahora!</h2>
            <div className='flex flex-col sm:flex-row justify-center items-center'>
                <button className='downloadbtn mb-4 sm:mb-0 sm:mr-6' style={{ backgroundImage: `url(${playbtn})` }}></button>
                <button className='downloadbtn' style={{ backgroundImage: `url(${appbtn})` }}></button>
            </div>
        </div>
    );
}

export default Download;