import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './BrowserWindow.scss';

export class BrowserWindow extends Component {

    componentElement;
    maxRotation = 20;
    hoverScale = 1.05;

    componentDidMount() {
        this.componentElement = ReactDOM.findDOMNode(this);
        this.componentElement.parentElement.style.perspective = '800px';
        this.componentElement.addEventListener('mousemove', this.mouseMoveEvent.bind(this));
        this.componentElement.addEventListener('mouseleave', this.mouseLeaveEvent.bind(this));
    }

    componentWillUnmount() {
        this.componentElement.parentElement.style.perspective = '';
        this.componentElement.removeEventListener('mousemove', this.mouseMoveEvent);
        this.componentElement.removeEventListener('mouseleave', this.mouseLeaveEvent);
    }

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

    mouseMoveEvent(event) {
        let componentPosition = this.componentElement.getBoundingClientRect(),
            xRotation = (event.clientY - componentPosition.y - (componentPosition.height / 2)) / (componentPosition.height / 2) * this.maxRotation,
            yRotation = (event.clientX - componentPosition.x - (componentPosition.width / 2)) / (componentPosition.width / 2) * this.maxRotation * -1;

        this.componentElement.style.transform = `scale(${this.hoverScale}) rotate3d(1, 0, 0, ${xRotation}deg) rotate3d(0, 1, 0, ${yRotation}deg)`;
    }

    mouseLeaveEvent() {
        this.componentElement.style.transform = '';
    }
}
