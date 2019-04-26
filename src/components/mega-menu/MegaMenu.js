import React, { Component } from 'react';
import './MegaMenu.scss';

export class MegaMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menuOpened: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    render() {
        return <div className={`mega-menu ${this.state.menuOpened ? 'opened' : ''}`}>
            <button className="menu-toggle" onClick={this.toggleMenu}>
                <div className="icon">
                    <div className="line-1"></div>
                    <div className="line-2"></div>
                    <div className="line-3"></div>
                </div>
                {/* <h4>{this.state.menuOpened ? 'Close' : 'Menu'}</h4> */}
            </button>
            <div className="menu-view">
                <h1>Home</h1>
                <h1>About</h1>
            </div>
        </div>;
    }

    toggleMenu() {
        if (this.state.menuOpened) {
            document.querySelector('.main-content').style.filter = '';
        } else {
            document.querySelector('.main-content').style.filter = 'blur(100px)';
        }

        this.setState((state, props) => {
            return {
                menuOpened: !this.state.menuOpened
            };
        });
    }
}