import React, { Component } from 'react';
import { LayoutContainer } from '../../components/layout-container/LayoutContainer';
import { BlockQuote } from '../../components/block-quote/BlockQuote';
import { ImageWithCaption } from '../../components/image-with-caption/ImageWithCaption';
import { GradientBorderImage } from '../../components/gradient-border-image/GradientBorderImage';
import AboutImage from './jordy-sq.png';
import './About.scss';

export class About extends Component {
    render() {
        return <LayoutContainer className="about paragraph">
            <div className="header">
                <GradientBorderImage src={AboutImage} alt="Chonky doggo" />
                <h1 className="title">whoami</h1>
                <hr></hr>
            </div>
            <div className="body">
                <p><b><i>*record scratch*</i></b></p>
                <p><b><i>*freeze frame*</i></b></p>
                <p>Oh, hey there! I supposed you're wondering how I ended up where I am today... It's a long story.</p>
                <p>But before I get too deep, let's get the formalities out of the way. My name is Young Park and I'm just your average {this.getMyAge()} year old Korean American livin' in the big ol' state of Texas. You might find me working out at your local gym, coding up a storm at a local coffee shop, or catching the latest episode of whatever's on TV with my fiancé and two puppers.</p>
                <BlockQuote>Python... You're talking about the slithery thing right?</BlockQuote>
                <p>I first learned about coding during my years as an undergrad at Graceland University (Yes, I actually lived in Lamoni, Iowa for four years). If I have to be honest, I didn't really like it at first, but despite the initial frustrations and headache, I decided to stick with it.</p>
                <p>And one day, it all started to <b><i>click</i></b>.</p>
                <p>Back in the winter of 2011, I managed to write my first Python program without any help from my old friend Stack Overflow, and it felt so empowering. This has gotta be how Prince Adam feels while transforming into his scantily clad alter ego.</p>
                <ImageWithCaption src="//media0.giphy.com/media/BdAn5S0xigpO/giphy.gif" alt="He-Man">
                    He-Man. Credits: <a href="//giphy.com/gifs/BdAn5S0xigpO" target="_blank" rel="noopener noreferrer">Giphy</a>
                </ImageWithCaption>
                <p>It was an exhilarating feeling and I wanted to experience it more. So I started coding more on my own. I learned how to code in all sorts of languages like Java, MySQL, c++, Visual Basic, and then I learned about Javascript.</p>
            </div>
        </LayoutContainer>;
    }

    getMyAge() {
        return new Date(new Date() - new Date('10/15/1993')).getFullYear() - 1970;
    }
}
