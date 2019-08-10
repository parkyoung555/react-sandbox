import React, { Component } from 'react';
import { MaterialIcons } from '../material-icons/MaterialIcons';
// import { MegaMenu } from '../mega-menu/MegaMenu';
import { NavLink } from 'react-router-dom';
import './Toolbar.scss';

export class Toolbar extends Component {

    scrollWindow = document.body;

    constructor(props) {
        super(props);
        this.state = {
            floating: false
        };
    }

    componentDidMount() {
        this.scrollWindow.addEventListener('scroll', this.scrollEvent.bind(this));
    }

    componentWillUnmount() {
        this.scrollWindow.removeEventListener('scroll', this.scrollEvent);
    }

    render() {
        return <header className={'toolbar' + (this.state.floating ? ' floating' : '')}>
            <div className="header-row">
                {/* <MegaMenu></MegaMenu> */}
                <h1 className="logo"><MaterialIcons theme="outlined" size="18">whatshot</MaterialIcons>Sandbox</h1>
                <div className="nav">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/about-me">About</NavLink>
                    <NavLink to="/components">Components</NavLink>
                </div>
            </div>
        </header>;
    }

    scrollEvent(event) {
        this.setState((state, props) => {
            return {
                floating: event.target.scrollTop > 0
            };
        });
    }
}