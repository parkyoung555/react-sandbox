import React, { Component } from 'react';
import './SlideBar.scss';

export class SlideBar extends Component {

    componentStates = {
        complete: '_complete',
        dragging: '_dragging'
    };
    isMouseDown = false;
    currentPercentage;
    initialFillPercent = 50;

    constructor(props) {
        super(props);

        this.initialFillPercent = this.props.initialFillPercent || this.initialFillPercent;
        this._handleMouseDownEvent = this._handleMouseDownEvent.bind(this);
    }

    componentDidMount() {
        this._setSlideTextWidth();
        this._setCompleteStateClass();
        window.addEventListener('resize', this._setSlideTextWidth.bind(this));
        window.addEventListener('mouseup', this._handleMouseUpEvent.bind(this));
        window.addEventListener('mousemove', this._handleMouseMoveEvent.bind(this));
        // mobile
        window.addEventListener('touchend', this._handleMouseUpEvent.bind(this));
        window.addEventListener('touchmove', this._handleMouseMoveEvent.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._setSlideTextWidth);
    }

    _setSlideTextWidth() {
        this.refs.slideHandleText.style.width = `${this.refs.slideBaseText.getBoundingClientRect().width}px`;
    }

    _handleMouseDownEvent(event) {
        this.isMouseDown = true;
        this.refs.slideHandle.style.transition = 'none';
        this.refs.component.classList.add(this.componentStates.dragging);

        this._handleMouseMoveEvent(event);
    }

    _handleMouseUpEvent() {
        this.isMouseDown = false;
        this.refs.slideHandle.style.transition = null;
        this.refs.component.classList.remove(this.componentStates.dragging);

        if (this.currentPercentage < 100) {
            this.refs.slideHandle.style.width = `${this.initialFillPercent}%`;
        }
    }

    _handleMouseMoveEvent(event) {
        if (this.isMouseDown) {
            const xPos = event.touches ? event.touches[0].clientX : event.clientX;
            const containerDims = this.refs.component.getBoundingClientRect();
            this.currentPercentage = ((xPos - containerDims.left) / containerDims.width) * 100;
            this.refs.slideHandle.style.width = `${this.currentPercentage > 100 ? 100 : (this.currentPercentage < 0 ? 0 : this.currentPercentage)}%`;

            this._setCompleteStateClass();
        }
    }

    _setCompleteStateClass() {
        if (this.currentPercentage >= 100) {
            this.refs.component.classList.add(this.componentStates.complete);
        } else {
            this.refs.component.classList.remove(this.componentStates.complete);
        }
    }

    render() {
        return (
            <div className={`slide-bar${this.props.className ? ` ${this.props.className}` : ''}`} ref="component">
                <div className="slide-bar__wrapper" onMouseDown={this._handleMouseDownEvent} onTouchStart={this._handleMouseDownEvent}>
                    <div className="slide-bar__content">
                        <div className="slide-bar__slide" style={{ width: `${this.initialFillPercent}%` }} ref="slideHandle">
                            <span className="slide-bar__slide__text" ref="slideHandleText">{this.props.label}</span>
                        </div>
                        <div className="slide-bar__base" ref="slideBase">
                            <span className="slide-bar__base__text" ref="slideBaseText">{this.props.label}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}