import React, { Component } from 'react';
import logo from '../TLSLogo.png';
import img from '../tls-camera.jpg'
import '../App.css';

class Home extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  componentWillReceiveProps() {
    if (this.props.location.state && this.props.location.state.about) {
      this.scrollTo('about');
    }
  }

  scrollTo(sec="about") {
    let _this = this
    setTimeout(function(){
      _this.refs[sec].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  }

  render() {
    return (
      <div ref='home'>
        <div className="top">
          <img unselectable="on" src={img} className="bg" alt="logo" />

          <div className="splash">
            <img unselectable="on" src={logo} className="logo" alt="logo" />
            <div></div>
          </div>
        </div>

        <div ref="about" className="about">
          <p>
            <span
               style={{fontSize: 25, color: '#d4ae93'}}>
               About Me
             </span><br/><br/><br/>
           My name is Terrance Shields and I am a freelance Photographer residing in New York City. I have always been passionate about all the beautiful sites to see in the world. During my time traveling in the Army I have been fortunate enough to see some of the most beautiful sites firsthand. I've developed an amazing eye for beauty whether I'm capturing your dream wedding, your eclectic and funky clothing line, or a fun and exciting night out in NYC it is my goal to create amazing memories that will always warm your heart and keep a smile on your face. Let me capture your world through my lens!
          </p>
        </div>

      </div>
    );
  }
}

export default Home;
