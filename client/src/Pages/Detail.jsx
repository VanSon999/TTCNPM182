import React, { Component } from 'react';
import Header from "./Basic/NavBar";
import Body from "./Detail/Body";
// import CommentSection from './CommentSection';

class App extends Component {
    render() {
        return (
            <div className="container" style={{width:"80%"}}>
                <Header />
                <Body />
                {/* <CommentSection /> */}
            </div>
        );
    }
}

export default App;
