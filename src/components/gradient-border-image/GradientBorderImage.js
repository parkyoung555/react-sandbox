import React, { Component } from 'react';
import { ReactComponent as Circle } from './circle.svg';
// import ReactDOM from 'react-dom';
import './GradientBorderImage.scss';

export class GradientBorderImage extends Component {

    defaultStrokeWidth = 8;

    componentDidMount() {
        // this.componentElement = ReactDOM.findDOMNode(this);
        // let svgElement = this.componentElement.querySelector('#circle'),
        //     svgCircle = svgElement.querySelector('circle'),
        //     componentElementSize = this.componentElement.getBoundingClientRect().width;

        // svgElement.setAttribute('viewBox', `-${componentElementSize / 2} -${componentElementSize / 2} ${componentElementSize} ${componentElementSize}`);
        // svgCircle.setAttribute('stroke-width', this.defaultStrokeWidth);
        // svgCircle.setAttribute('r', (componentElementSize - this.defaultStrokeWidth) / 2);
    }

    render() {
        return <div className="gradient-border-image">
            <img src={this.props.src} alt={this.props.alt} />
            <Circle></Circle>
        </div>;
    }
}