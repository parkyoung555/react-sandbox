import React, { Component } from 'react';
import './LayoutContainer.scss';

export class LayoutContainer extends Component {

    render() {
        return <div className="layout-container">
            {this.props.children}
        </div>
    }
}
