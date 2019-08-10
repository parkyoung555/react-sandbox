import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Toolbar } from './components/toolbar/Toolbar';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { Components } from './pages/components/Components';
import { Footer } from './components/footer/Footer';
import { ReactComponent as SvgGradients } from './assets/images/gradient.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Toolbar></Toolbar>
        <div className="main-content">
          <Route path="/" exact component={Home}></Route>
          <Route path="/about-me" component={About}></Route>
          <Route path="/components" component={Components}></Route>
        </div>
        <Footer></Footer>
        <SvgGradients></SvgGradients>
      </Router>
    );
  }
}

export default App;
