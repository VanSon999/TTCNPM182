import React, { Component } from 'react';
import Header from "./Basic/NavBar";
import Body from "./Search/Detail";

class App extends Component {
    render() {
        return (
            <div className="container" style={{width:"80%"}}>
                <Header></Header>
                <Body></Body>
            </div>
        );
    }
}

export default App;
