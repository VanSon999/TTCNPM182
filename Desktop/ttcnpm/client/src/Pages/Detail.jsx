import React, { Component } from 'react';
import Header from "./Basic/NavBar";
import Footer from './Basic/Footer';
import Body from "./Detail/Body";
// import CommentSection from './CommentSection';

class App extends Component {
    render() {
        return (
            <div>
                <div className="container" style={{width:"80%"}}>
                <Header />
                <Body />
                {/* <CommentSection /> */}
                </div>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default App;
