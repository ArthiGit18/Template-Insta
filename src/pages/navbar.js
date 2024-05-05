import '../index.css';

const NavBar = () => {
    return (
        <div className='container'>
            <div className='Navbar'>
                <div className='Logo'>
                    <img src="/navbarImg/Vector.png" alt="Logo" className='logoImg' />
                </div>
                <div className='Actions'>
                    <img src="/navbarImg/Add Icon Filled.png" alt="Add Icon Filled" className='actionImg' />
                    <img src="/navbarImg/Heart.png" alt="Heart" className='actionImg' />
                    <img src="/navbarImg/Share.png" alt="Share" className='actionImg' />
                </div>
            </div>
        </div>
    )
}

export default NavBar;