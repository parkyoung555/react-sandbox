import React, { Component } from 'react';
import './SlideBar.scss';

export class SlideBar extends Component {

    stateClasses = {
        complete: '_complete',
        dragging: '_dragging'
    };
    initialFillPercent = 50;
    state = {
        isMouseDown: false,
        currentPercentage: 0
    };

    constructor(props) {
        super(props);
        this.initialFillPercent = this.props.initialFillPercent || this.initialFillPercent;
        this.initialFillPercent = this.initialFillPercent < 100 ? this.initialFillPercent : 100;
        this.state.currentPercentage = this.initialFillPercent;
        this._handleMouseDownEvent = this._handleMouseDownEvent.bind(this);
    }

    componentDidMount() {
        this._setSlideTextWidth();
        this._setCompleteStateClass();
        this.refs.component.style.setProperty('--progress', this.state.currentPercentage / 100);
        window.addEventListener('resize', this._setSlideTextWidth.bind(this));
        window.addEventListener('mouseup', this._handleMouseUpEvent.bind(this));
        window.addEventListener('mousemove', this._handleMouseMoveEvent.bind(this));
        // mobile
        window.addEventListener('touchend', this._handleMouseUpEvent.bind(this));
        window.addEventListener('touchmove', this._handleMouseMoveEvent.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this._setSlideTextWidth);
        window.removeEventListener('mouseup', this._handleMouseUpEvent);
        window.removeEventListener('mousemove', this._handleMouseMoveEvent);
        window.removeEventListener('touchend', this._handleMouseUpEvent);
        window.removeEventListener('touchmove', this._handleMouseMoveEvent);
    }

    _setSlideTextWidth() {
        this.refs.slideHandleText.style.width = `${this.refs.slideBaseText.getBoundingClientRect().width}px`;
    }

    _handleMouseDownEvent(event) {
        event.persist();
        this.setState({ isMouseDown: true }, () => {
            this.refs.slideHandle.style.transition = 'none';
            this.refs.component.classList.add(this.stateClasses.dragging);
            this._handleMouseMoveEvent(event);
        });
    }

    _handleMouseUpEvent() {
        if (this.state.isMouseDown) {
            this.refs.slideHandle.style.transition = null;
            this.refs.component.classList.remove(this.stateClasses.dragging);
            if (this.state.currentPercentage < 100) {
                this._setCurrentFillPercentage(this.initialFillPercent);
            }
        }
        this.setState({ isMouseDown: false });
    }

    _handleMouseMoveEvent(event) {
        if (this.state.isMouseDown) {
            const xPos = event.touches ? event.touches[0].clientX : event.clientX;
            const containerDims = this.refs.component.getBoundingClientRect();
            this._setCurrentFillPercentage(((xPos - containerDims.left) / containerDims.width) * 100);
            this._setCompleteStateClass();
        }
    }

    _setCompleteStateClass() {
        if (this.state.currentPercentage >= 100) {
            this.refs.component.classList.add(this.stateClasses.complete);
        } else {
            this.refs.component.classList.remove(this.stateClasses.complete);
        }
    }

    _setCurrentFillPercentage(fillPercentage) {
        this.setState((state, props) => {
            this.refs.component.style.setProperty('--progress', fillPercentage / 100);
            return {
                currentPercentage: fillPercentage > 100 ? 100 : (fillPercentage < 0 ? 0 : fillPercentage)
            };
        });
    };

    render() {
        return (
            <div className={`slide-bar${this.props.className ? ` ${this.props.className}` : ''}`} ref="component">
                <div className="slide-bar__wrapper" onMouseDown={this._handleMouseDownEvent} onTouchStart={this._handleMouseDownEvent}>
                    <div className="slide-bar__content">
                        <div className="slide-bar__slide" style={{ width: `${this.state.currentPercentage}%` }} ref="slideHandle">
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