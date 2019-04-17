import React, { Component } from 'react';
import './BrowserWindow.scss';

export class BrowserWindow extends Component {

    render() {
        return <div className="browser-window">
            <div className="toolbar">
                <button className="close"></button>
                <button className="minimize"></button>
                <button className="maximize"></button>
            </div>
            <div className="content">
                {this.props.children}
            </div>
        </div>;
    }
}
