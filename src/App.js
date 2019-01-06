import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  Header, Footer, Home, Admin, ImageView,
  Contact, Galleries, Gallery, AdminDocs
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
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App" style={{opacity: this.state.opacity }}>
          <Header/>
          <Route path={process.env.PUBLIC_URL + "/"} exact component={Home} />
          <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          <Route path={process.env.PUBLIC_URL + "/gallery/:id"} component={Gallery} />
          <Route path={process.env.PUBLIC_URL + "/galleries"} component={Galleries} />
          <Route path={process.env.PUBLIC_URL + "/images/:id"} component={ImageView} />
          <Route path={process.env.PUBLIC_URL + "/admin"} component={Admin} />
          <Route path={process.env.PUBLIC_URL + "/adminDocs"} component={AdminDocs} />
          <Footer/>
        </div>
      </Router>
    );
  }
}



export default App;
