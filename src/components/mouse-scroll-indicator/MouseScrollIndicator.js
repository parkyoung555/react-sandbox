import React, { Component } from 'react';
import './MouseScrollIndicator.scss';

export class MouseScrollIndicator extends Component {

    render() {
        return <div className={'mouse ' + this.props.className}></div>
    }
}