import '../index.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddIcon from '@mui/icons-material/Add';

const Story = () => {
    return (
        <div className='container'>
            <div className='Story'>
                <div className='storyWrap'>
                    <img src="/navbarImg/Cute Planet_ Robot One.jpeg" alt="" />
                    <div className='addIcon'>
                        <AddIcon />
                    </div>
                    <div className='storyTxt'>
                        My STory
                    </div>
                </div>
                <div className='storyWrap'>
                    <div className='liveStory'>
                        <img src="/navbarImg/Cute Planet_ Robot One.jpeg" alt="" />
                    </div>
                    <div className='liveButton'>
                        <button type='button' className='liveBtn'> LIVE</button>
                    </div>

                    <div className='storyTxt'>
                        My STory
                    </div>
                </div>
                <div className='storyWrap'>
                    <div className='activeStory'>
                        <img src="/navbarImg/Cute Planet_ Robot One.jpeg" alt="" />
                    </div>
                    <div className='storyTxt'>
                        My STory
                    </div>
                </div>
                <div className='storyWrap'>
                    <div className='activeStory'>
                        <img src="/navbarImg/Cute Planet_ Robot One.jpeg" alt="" />
                    </div>
                    <div className='storyTxt'>
                        My STory
                    </div>
                </div>
                <div className='storyWrap'>
                    <div className='activeStory'>
                        <img src="/navbarImg/Cute Planet_ Robot One.jpeg" alt="" />
                    </div>
                    <div className='storyTxt'>
                        My STory
                    </div>
                </div>
                <div className='storyWrap'>
                    <div className='seenStory'>
                        <img src="/navbarImg/Cute Planet_ Robot One.jpeg" alt="" />
                    </div>
                    <div className='storyTxt'>
                        My STory
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Story;