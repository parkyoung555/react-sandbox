import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SlideBar.scss';

export class SlideBar extends Component {

    componentClass = 'slide-bar';
    componentClasses = {
        wrapper: `.${this.componentClass}__wrapper`,
        content: `.${this.componentClass}__content`,
        slide: `.${this.componentClass}__slide`,
        slideText: `.${this.componentClass}__slide__text`,
        base: `.${this.componentClass}__base`,
        baseText: `.${this.componentClass}__base__text`
    };
    componentStates = {
        complete: '_complete'
    };
    componentElement;
    contentElement;
    slideElement;
    baseElement;
    isMouseDown = false;
    currentPercentage;
    initialFillPercent = 50;

    constructor(props) {
        super(props);

        this.initialFillPercent = this.props.initialFillPercent || this.initialFillPercent;
        this._handleMouseDownEvent = this._handleMouseDownEvent.bind(this);
    }

    componentDidMount() {
        this.componentElement = ReactDOM.findDOMNode(this);
        this.contentElement = this.componentElement.querySelector(this.componentClasses.content);
        this.slideElement = this.componentElement.querySelector(this.componentClasses.slide);
        this.slideTextElement = this.componentElement.querySelector(this.componentClasses.slideText);
        this.baseElement = this.componentElement.querySelector(this.componentClasses.base);
        this.baseTextElement = this.componentElement.querySelector(this.componentClasses.baseText);

        this._setSlideTextWidth();
        this._setComponentStateClasses();
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
        this.slideTextElement.style.width = `${this.baseTextElement.getBoundingClientRect().width}px`;
    }

    _handleMouseDownEvent(event) {
        this.isMouseDown = true;
        this.slideElement.style.transition = 'none';

        this._handleMouseMoveEvent(event);
    }

    _handleMouseUpEvent() {
        this.isMouseDown = false;
        this.slideElement.style.transition = null;

        if (this.currentPercentage < 100) {
            this.slideElement.style.width = `${this.initialFillPercent}%`;
        }
    }

    _handleMouseMoveEvent(event) {
        if (this.isMouseDown) {
            const xPos = event.touches ? event.touches[0].clientX : event.clientX;
            const containerDims = this.componentElement.getBoundingClientRect();
            this.currentPercentage = ((xPos - containerDims.left) / containerDims.width) * 100;
            this.slideElement.style.width = `${this.currentPercentage > 100 ? 100 : (this.currentPercentage < 0 ? 0 : this.currentPercentage)}%`;

            this._setComponentStateClasses();
        }
    }

    _setComponentStateClasses() {
        if (this.currentPercentage >= 100) {
            this.componentElement.classList.add(this.componentStates.complete);
        } else {
            this.componentElement.classList.remove(this.componentStates.complete);
        }
    }

    render() {
        return (
            <div className={`slide-bar${this.props.className ? ` ${this.props.className}` : ''}`}>
                <div className="slide-bar__wrapper" onMouseDown={this._handleMouseDownEvent} onTouchStart={this._handleMouseDownEvent}>
                    <div className="slide-bar__content">
                        <div className="slide-bar__slide" style={{ width: `${this.initialFillPercent}%` }}>
                            <span className="slide-bar__slide__text">{this.props.label}</span>
                        </div>
                        <div className="slide-bar__base">
                            <span className="slide-bar__base__text">{this.props.label}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}