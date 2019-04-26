import React, { Component } from 'react';
import './ImageWithCaption.scss';

export class ImageWithCaption extends Component {

    render() {
        return <div className="image-with-caption">
            <img src={this.props.src} alt={this.props.alt} />
            <h4>{this.props.children}</h4>
        </div>;
    }
}