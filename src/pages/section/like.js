import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Like = () =>{
    const [liked, setLiked] = useState(false);

    const handleLikeClick = () => {
        setLiked(!liked);
    };
    return(
        <div onClick={handleLikeClick}>
        {liked ? (
            <FavoriteIcon style={{ fontSize: "30px", color: "red" }} className='actionImg' />
        ) : (
            <FavoriteBorderIcon style={{ fontSize: "30px" }} className='actionImg' />
        )}
    </div>
    )
}

export default Like;