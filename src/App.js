import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Toolbar } from './components/toolbar/Toolbar';
import { About } from './pages/about/About';
import { Home } from './pages/home/Home';
import { Footer } from './components/footer/Footer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Toolbar></Toolbar>
        <div className="main-content">
          <Route path="/" exact component={Home}></Route>
          <Route path="/about-me" component={About}></Route>
        </div>
        <Footer></Footer>
      </Router>
    );
  }
}

export default App;
