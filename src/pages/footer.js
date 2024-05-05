import '../index.css';

const Footer = () => {
    return (
        <div className='container'>
            <div className='Footer'>
                {/* <div className='FooterActions'> */}
                    <img src="/navbarImg/Vector (1).png" alt="Logo" className='footerLogo' />
                    <img src="/navbarImg/Search.png" alt="Add Icon Filled" className='footerLogo' />
                    <img src="/navbarImg/Union.png" alt="Heart" className='footerLogo' />
                    <img src="/navbarImg/Union (1).png" alt="Share" className='footerLogo' />
                    {/* <img src="/navbarImg/Union (1).png" alt="Share" className='footerLogo' /> */}
                    <img src="/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg" alt="Logo" className='footerLogoProfile' />
                {/* </div> */}
            </div>

            <div className='footerSlide'>
            <img src="/navbarImg/IOS Home.png" alt="Share" className='footerView' />
            </div>
        </div>
    )
}

export default Footer;