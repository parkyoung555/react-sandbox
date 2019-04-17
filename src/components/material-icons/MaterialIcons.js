import React, { Component } from 'react';
import './MaterialIcons.scss';

export class MaterialIcons extends Component {

    render() {
        return <i className={`material-icons${(this.props.theme ? `-${this.props.theme}` : '')}${this.props.size ? ` md-${this.props.size}`: ''}`}>
            {this.props.children}
        </i>;
    }
}