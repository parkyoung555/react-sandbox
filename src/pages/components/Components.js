import React, { Component } from 'react';
import { LayoutContainer } from '../../components/layout-container/LayoutContainer';
import './Components.scss';
import { SlideBar } from '../../components/slide-bar/SlideBar';

export class Components extends Component {
    render() {
        return (
            <LayoutContainer className="components">
                <section>
                    <h2>Sliders</h2>
                    <SlideBar label="Swipe to begin" />
                    <SlideBar label="If your label happens to be super, super, super, super, super, super, super, super, super, super, super, super, super, super, long, the text will not wrap and will truncate with ellipsis. Neato!" />
                    <SlideBar label="Initial fill percentage set to 33%. If you don't specify a percentage, it will default to 50%" initialFillPercent={33} />
                    <SlideBar className='keyo-blue' label="Custom color" initialFillPercent={75} />
                    <SlideBar className='random' label="Go crazy" initialFillPercent={16} />
                </section>
            </LayoutContainer>
        );
    }
}