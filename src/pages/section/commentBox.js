import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import Like from '../section/like';

const commentsData = [
    {
        id: 1,
        userName: 'Lusy',
        userImage: '/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg',
        commentText: 'Hello 🐱❤️',
        timeAgo: '2d ago',
    },
    {
        id: 2,
        userName: 'John',
        userImage: '/navbarImg/Cute❤✨.jpeg',
        commentText: 'Nice post!',
        timeAgo: '3d ago',
    },
    {
        id: 3,
        userName: 'Math',
        userImage: '/navbarImg/Happy International Cat Day! 🐱❤️.jpeg',
        commentText: 'Nice post!',
        timeAgo: '3d ago',
    },
    {
        id: 4,
        userName: 'Jacob',
        userImage: '/navbarImg/Cute cat pfp.jpeg',
        commentText: 'Nice post!  / / /',
        timeAgo: '3d ago',
    },
    {
        id: 5,
        userName: 'Cath',
        userImage: '/navbarImg/Cute❤✨.jpeg',
        commentText: 'Nice post!   "❤✨',
        timeAgo: '3d ago',
    },
];

export default function AnchorTemporaryDrawer() {
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{
                width: anchor === 'bottom' ? 'auto' : 250,
            }}
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                <CloseIcon onClick={toggleDrawer(anchor, false)} style={{ cursor: 'pointer' }} />
            </Box>
            <div className='commentSection'>
                <img src="/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg" alt="Logo" className='footerLogoProfile' />
                <h3>Lusy</h3>
                <MoreVertIcon />
            </div>
            <Divider />
            <div className='commentsContainer'>
                {commentsData.map(comment => (
                    <React.Fragment key={comment.id}>
                        <div className='commentSection'>
                            <img src={comment.userImage} alt={`${comment.userName}'s profile`} className='footerLogoProfile' />
                            <div>
                                <h3>{comment.userName}</h3>
                                <p>{comment.commentText}</p>
                            </div>
                            <Like />
                        </div>
                        <div className='commentMoment'>
                            <p style={{ marginRight: '20px' }}>{comment.timeAgo}</p>
                            <p>Reply</p>
                        </div>
                    </React.Fragment>
                ))}
            </div>
            <Divider />
            <div className='commentSection'>
                <img src="/navbarImg/280dd7a5-d0ba-4ab4-ac77-7e0fcce6fd25.jpeg" alt="Logo" className='footerLogoProfile' />
                <TextField id="standard-basic" placeholder='Add a comment' variant="standard" />
                <p style={{color:"blue"}}>post</p>
            </div>
        </Box>
    );

    return (
        <div>
            {['bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <ChatBubbleOutlineIcon style={{ fontSize: '30px' }} /> {/* Use the ChatBubbleOutlineIcon here */}
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={() => {}}
                        PaperProps={{
                            sx: {
                                width: 1170,
                                margin: '0 auto',
                            },
                        }}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}