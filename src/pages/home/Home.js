import React, { Component } from 'react';
import { ReactComponent as SandboxIcon } from './sandbox.svg';
import { MouseScrollIndicator } from '../../components/mouse-scroll-indicator/MouseScrollIndicator';
import { BrowserWindow } from '../../components/browser-window/BrowserWindow';
import { Card } from '../../components/card/Card';
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
                        </BrowserWindow>
                    </div>
                </div>
                <div className="footer">
                    <MouseScrollIndicator className={this.state.isScrolled ? 'scrolled': ''}></MouseScrollIndicator>
                </div>
            </section>
            <section className="features">
                <div className="layout-column">
                    <h2>Some interesting things</h2>
                    <div className="layout-row cards">
                        {this.getCardData().map((data, index) => {
                            return <a className="card-link" href={data.url} key={index}>
                                <Card>
                                    <div className="header-image"></div>
                                    <div className="body">
                                        <h3 className="title">{data.title}</h3>
                                        <p>{data.body.slice(0, 50)}...</p>
                                    </div>
                                </Card>
                            </a>;
                        })}
                    </div>
                </div>
            </section>
        </div>;
    }

    getCardData() {
        return [
            {
                title: 'Top 5 geometric fonts for 2019',
                body: 'For some years now, geometric fonts have been a consistent trend when it comes to brand and interface design. Good examples include AirBnB’s Cereal, Google’s Product Sans, even Spotify uses a geometric font called Circular.',
                url: 'https://uxdesign.cc/top-5-geometric-fonts-for-2019-4c34a405bd97'
            },
            {
                title: 'Design better data tables',
                body: 'Data is useless without the ability to visualize and act on it. The success of future industries will couple advanced data collection with a better user experience, and the data table comprises much of this user experience.',
                url: 'https://uxdesign.cc/design-better-data-tables-4ecc99d23356'
            },
            {
                title: 'What to Expect in Angular 8',
                body: 'Angular 8 is just around the corner. Although the Angular team has been a bit circumspect about precisely when version 8 will be released, they recently revealed that version 8 would arrive in March or April.',
                url: 'https://medium.com/grapecity/what-to-expect-in-angular-8-940b217b63cb'
            },
            {
                title: 'Is There a React Equivalent for Angular’s ng-repeat?',
                body: 'Yes. React doesn’t use a proprietary construct to iterate over a collection of data. Instead, it relies on native Javascript iterators to generate repeating blocks of UI.',
                url: 'https://reactjsnews.com/NgRepeat-Equivalent-in-React'
            }
        ];
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