import React, { Component } from 'react';
import { ReactComponent as SandboxIcon } from './sandbox.svg';
import { ReactComponent as SvgGradient } from './gradient.svg';
import { MouseScrollIndicator } from '../../components/mouse-scroll-indicator/MouseScrollIndicator';
import { BrowserWindow } from '../../components/browser-window/BrowserWindow';
import './Home.scss';

export class Home extends Component {

    pageClass = 'homepage';
    scrollWindow = document.body;

    _mounted = false;

    constructor(props) {
        super(props);
        this.state = {
            isScrolled: false
        };
    }

    componentDidMount() {
        this._mounted = true;
        document.body.classList.add(this.pageClass);
        this.scrollWindow.addEventListener('scroll', this.scrollEvent.bind(this));
    }

    componentWillUnmount() {
        this._mounted = false;
        document.body.classList.remove(this.pageClass);
        this.scrollWindow.removeEventListener('scroll', this.scrollEvent);
    }

    render() {
        return <div className="home">
            <section className="hero layout-column">
                <div className="layout-row">
                    <div className="text layout-column justify-center">
                        <h2><span>Hell</span><span role="img" aria-label="O">👌</span><span>.</span></h2>
                        <p>Just a place to tinker with React</p>
                    </div>
                    <div className="graphic layout-column layout-fill align-center justify-center">
                        <BrowserWindow>
                            <SandboxIcon className="sandbox-icon"></SandboxIcon>
                            <SvgGradient></SvgGradient>
                        </BrowserWindow>
                    </div>
                </div>
                <div className="footer">
                    <MouseScrollIndicator className={this.state.isScrolled ? 'scrolled': ''}></MouseScrollIndicator>
                </div>
            </section>
            <section className="features">
                <h2>U suk sue</h2>
            </section>
        </div>;
    }

    scrollEvent(event) {
        if (!this._mounted) {
            return false;
        }

        this.setState((state, props) => {
            return {
                isScrolled: event.target.scrollTop > 0
            };
        });
    }
}