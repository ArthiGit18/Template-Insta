import '../index.css';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LocalMallIcon from '@mui/icons-material/LocalMall';

const Footer = () => {
    return (
        <div className='container'>
            <div className='Footer'>
                    <HomeIcon className='muiIcons' style={{fontSize:"30px"}} />
                    <SearchIcon className='muiIcons' style={{fontSize:"30px"}} />
                    <AddIcon className='muiIcons' style={{fontSize:"30px", border: "2px solid black", borderRadius: "5px"}} />
                    <LocalMallIcon className='muiIcons' style={{fontSize:"30px"}} />
                    <img src="/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg" alt="Logo" className='footerLogoProfile' />
               
            </div>

            <div className='footerSlide'>
            <img src="/navbarImg/IOS Home.png" alt="Share" className='footerView' />
            </div>
        </div>
    )
}

export default Footer;