import React from 'react';
import NavBar from './Basic/NavBar.js';
import Footer from './Basic/Footer.js';
import Storyboard from './StoryBoard/Storybroad.js';

const storyboardpage = () => {
    return (
        <div>
        <div className="container" style={{width:"80%"}}>
            <NavBar />
                <Storyboard />
        </div>
        <div><Footer /></div>
        </div>
    );
}

export default storyboardpage;