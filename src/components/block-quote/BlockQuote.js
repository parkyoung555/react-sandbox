import React, { Component } from 'react';
import { MaterialIcons } from '../material-icons/MaterialIcons';
import './BlockQuote.scss';

export class BlockQuote extends Component {

    render() {
        return <blockquote>
            <MaterialIcons theme="outlined" size="48">format_quote</MaterialIcons>
            <span>{this.props.children}</span>
            <MaterialIcons theme="outlined" size="48">format_quote</MaterialIcons>
        </blockquote>
    }
}