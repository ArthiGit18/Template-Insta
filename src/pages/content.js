import '../index.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Content = () => {
    return (
        <>
            <div className="container">
                <div className='Content'>
                    <div className='ProfileName'>
                        <img src="/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg" alt="Logo" className='contentImage' />
                        <div className='postedBy' style={{ margin: "0px 20px" }}>
                            <h2>Lusy</h2>
                            <small>Us, Sponsored</small>
                        </div>
                    </div>

                    <div className='action'>
                        <MoreHorizIcon />
                    </div>
                </div>

                {/* <img src="/navbarImg/Cute❤✨.jpeg" alt="Logo" className='contentImage' /> */}
                <img src="/navbarImg/download (9).jpeg" alt="Logo" className='contentPost' />

                <div className='AllPostActions'>
                    <div className='commonAction'>
                        <img src="/navbarImg/heart.png" alt="Logo" className='postactions' />
                        <img src="/navbarImg/Comment.png" alt="Logo" className='postactions' />
                        <img src="/navbarImg/Share.png" alt="Logo" className='postactions' />
                    </div>
                    <div className='saveAction'>
                        <img src="/navbarImg/Bookmark.png" alt="Logo" className='postactions' />
                    </div>
                </div>

                <div className='postDetail'>
                    <h3>Officia occaecat cillum incididunt minim aute officia.</h3>
                    <p style={{ margin: "10px 0px" }}>Qui cillum ad velit officia nostrud ea consequat est. Dolor minim mollit fugiat cupidatat non cillum excepteur. Magna non nulla adipisicing nulla ...
                    <a href="#">#Friends</a></p>
                    <p style={{ color: "gray" }}>View all 123 comments</p>
                    <div className='' style={{ margin: "20px 0", display: "flex", alignItems: "center" }} >
                        <img src="/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg" alt="Logo" className='footerLogoProfile' />
                        <p className='Mycomment'>Add a comment...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;