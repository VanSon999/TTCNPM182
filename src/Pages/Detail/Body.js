import React, { Component } from 'react';
import Detail from "./Detail";
import Content from "./Content";
import ListChapter from "./ListChapter";

class Body extends Component {
    render() {
        return (
            <div>
                <Detail></Detail>
                <Content></Content>
                <ListChapter></ListChapter>
            </div>
        );
    }
}

export default Body;
