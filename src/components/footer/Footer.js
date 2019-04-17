import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {

    render() {
        return <footer className="page-footer">
            <div className="content">
                <span>Made with </span><span role="img" aria-label="Love">🤟</span><span> by Young Park</span>
            </div>
        </footer>;
    }
}