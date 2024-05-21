import React, { useState } from 'react';
import NavBar from "../../pages/navbar";
import Story from "../../pages/stories";
import Content from "../../pages/content";
import Footer from "../../pages/footer";
import Switch from '@mui/material/Switch';
import "../../index.css";


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Home = () => {

    const [darkMode, setDarkMode] = useState(true);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`container ${darkMode ? 'dark' : 'light'}`}>
             <Switch {...label} checked={darkMode} onChange={handleToggle} />
            <NavBar />
            <Story />
            <div className="container">
                <div className="rule"></div>
            </div>
            <Content />
            <div className="container">
                <div className="rule"></div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;