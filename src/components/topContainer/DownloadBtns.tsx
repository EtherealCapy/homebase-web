import appbtn from '@assets/app_store_button.png';
import playbtn from '@assets/play_store_button.png';

const DownloadBtns = () => {
    return(
        <div className='flex flex-col sm:flex-row  justify-center items-center z-4 absolute bottom-50'>
            <button className='downloadbtn mb-4 sm:mb-0 sm:mr-20' style={{ backgroundImage: `url(${playbtn})` }}></button>
            <button className='downloadbtn' style={{ backgroundImage: `url(${appbtn})` }}></button>
        </div>
    );
}

export default DownloadBtns;
