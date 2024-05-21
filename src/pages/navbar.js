import '../index.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Switch from '@mui/material/Switch';
import TelegramIcon from '@mui/icons-material/Telegram';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NavBar = () => {
    return (
        <div className='container'>
            <div className='Navbar'>
                <div className='Logo'>
                    {/* <img src="/navbarImg/Vector.png" alt="Logo" className='logoImg' /> */}
                    <h1 className='lobster-regular' style={{margin: "0px 20px"}}>Instagram</h1>
                </div>
                <div className='Actions'>
                    <FavoriteBorderIcon style={{fontSize:"30px"}} className='actionImg' />
                    <TelegramIcon style={{fontSize:"30px"}} className='actionImg' />
                </div>
            </div>
        </div>
    )
}

export default NavBar;