import React, { useState } from 'react';
import '../index.css';
import AnchorTemporaryDrawer from './section/commentBox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const Content = () => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };
    const handleSaveClick = () => {
        setSaved(!saved);
    };

    return (
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
                    <MoreVertIcon style={{ fontSize: "30px", cursor: "pointer" }} />
                </div>
            </div>

            <img src="/navbarImg/download (9).jpeg" alt="Logo" className='contentPost' />

            <div className='AllPostActions'>
                <div className='commonAction'>
                    <div onClick={handleLikeClick}>
                        {liked ? (
                            <FavoriteIcon style={{ fontSize: "30px", color: "red" }} className='actionImg' />
                        ) : (
                            <FavoriteBorderIcon style={{ fontSize: "30px" }} className='actionImg' />
                        )}
                    </div>
                    <AnchorTemporaryDrawer />
                    <SendIcon style={{ fontSize: "30px" }} className='actionImg' />
                </div>
                <div className='saveAction' onClick={handleSaveClick}>
                    {saved ? (
                            <BookmarkIcon style={{ fontSize: "30px", color: "red" }} className='actionImg' />
                        ) : (
                            <BookmarkBorderIcon style={{ fontSize: "30px" }} className='actionImg' />
                        )}
                </div>
            </div>

            <div className='postDetail'>
                <h3>Officia occaecat cillum incididunt minim aute officia.</h3>
                <p style={{ margin: "10px 0px" }}>
                    Qui cillum ad velit officia nostrud ea consequat est. Dolor minim mollit fugiat cupidatat non cillum excepteur. Magna non nulla adipisicing nulla ...
                    <a href="#">#Friends</a>
                </p>
                <p style={{ color: "gray" }}>View all 123 comments</p>
                <div style={{ margin: "20px 0", display: "flex", alignItems: "center" }}>
                    <img src="/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg" alt="Logo" className='footerLogoProfile' />
                    <p className='Mycomment'>Add a comment...</p>
                </div>
            </div>
        </div>
    );
};

export default Content;
