import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Header, Footer, Home, Admin,
  Contact, Galleries, Gallery
} from './components/index.js';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      opacity: 0,
    }
  }

  componentDidMount() {
    this.fadeIn();
  }

  fadeIn(ms=0) {
    let _this = this;
    setTimeout(function(){
      _this.setState({
        opacity: 1,
      })
    }, ms);
  }

  render() {
    return (
    <Router>
      <div className="App" style={{opacity: this.state.opacity}}>
        <Header/>

        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/galleries" component={Galleries} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/admin" component={Admin} />
        { /* <Route component={Home} /> */ }

        <Footer/>
      </div>
    </Router>
    );
  }
}



export default App;
