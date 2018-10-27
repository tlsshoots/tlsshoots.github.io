import React, { Component } from 'react';
import axios from 'axios'
import logo from './TLSLogo.png';
import './App.css';
import img from './tls-camera.jpg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { faInstagram } from '@fortawesome/fontawesome-free-brands'


import Header from './components/header.js'


import images from './gallery'

library.add(faInstagram)
library.add(faEnvelope)

// import img from './BusinessCard_Front_Final.jpg'

class App extends Component {

  constructor() {
    super();
    this.state = {
      opacity: 0,
      gallery: false,
      activeImg: '',
      activeImgStyle: {
        zIndex: -10,
        opacity: 0
      },
      name: '',
      email: '',
      phone: '',
      details: ''
    }
  }

  componentDidMount() {
    this.fadeIn();
    this.fetchPhotos()
  }

  fetchPhotos() {

  }

  fadeIn() {
    let _this = this;
    setTimeout(function(){
      _this.setState({
        opacity: 1,
      })
    }, 100);
  }

  fadeOut() {
    let _this = this;
    setTimeout(function(){
      _this.setState({
        opacity: 0,
      })
    }, 100);
  }

  toggleGallery() {
    let _this = this;
    if (this.state.gallery) {
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          gallery: false
        })
        _this.fadeIn();
      }, 800);
    } else {
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          gallery: true
        })
        _this.fadeIn();
      }, 800);
    }
  }

  renderGallery() {
    let array = [];
    // let r_images = images.reverse();
    for (var i = 0; i < images.length; i++) {
      // let cardImg = `https://picsum.photos/${Math.floor(Math.random() * Math.floor(9)) * 100}`
      array.push(
        <div onClick={this.popImage.bind(this, images[i])} className="img-card">
          <img src={images[i]} className="img-itm" alt="logo" />
          <p></p>
        </div>
      )
    }
    return array;
  }

  popImage(cardImg) {
    this.setState({
      activeImg: cardImg,
      activeImgStyle: {
        zIndex: 10,
        opacity: 1
      }
    })
  }

  togglePopImage() {
    this.setState({
      activeImg: '',
      activeImgStyle: {
        zIndex: -10,
        opacity: 0
      }
    })
  }

  goHome(sec) {
    let _this = this
    if(this.state.gallery){
      this.toggleGallery();
      setTimeout(function(){
        _this.refs[sec].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 800);
    } else {
      setTimeout(function(){
        _this.refs[sec].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { name,email,phone,details } = this.state

    if (name && email && phone && details) {
      this.refs['err'].hidden = true
      this.refs['name'].hidden = true
      this.refs['email'].hidden = true
      this.refs['phone'].hidden = true
      this.refs['details'].hidden = true
      this.refs['submit'].hidden = true
      this.refs['ty'].hidden = false

      const form =  await axios.post('https://expresstls.herokuapp.com/mail', {
        name: name,
        email: email,
        phone: phone,
        details: details
      })
    } else {
      this.refs['err'].hidden = false
    }

  }

  render() {
    return (
      <div className="App" style={{opacity: this.state.opacity}}>
      {
        this.state.gallery ?
        (
          <div>
            <Header homeSwitch={this.goHome.bind(this)} />
            <img src={logo} onClick={this.toggleGallery.bind(this)} className="logo-2" alt="logo" />
            <div className="img-gal">
              {
                this.renderGallery()
              }
            </div>
            <div onClick={this.togglePopImage.bind(this)} style={this.state.activeImgStyle}  className="pop-img">
              <img src={this.state.activeImg} style={{resizeMode: 'contain', transition: '.5s'}} alt="logo" />
            </div>
          </div>
        ) :
        (
          <div>
            <div className="top">
              <img src={img} className="bg" alt="logo" />
              <Header homeSwitch={this.goHome.bind(this)} />
              <div className="splash">
                <img src={logo} className="logo" alt="logo" />
                <div onClick={this.toggleGallery.bind(this)} className="button">
                  <h3>gallery</h3>
                </div>
              </div>
            </div>

            <div ref="about" className="about">
              <p>

                <strong style={{fontSize: 25}}>About</strong><br/><br/>
                I’m Terrance Shields and I am an 8 year US Army Veteran with a passion for Photography, Travel and Good Conversation with Great People. Everyone’s story of life is a beautiful kaleidoscope mixed with what we do and not always knowing where we are going. Photography allows me to capture your most personal moments for you to save as a  reminder of your life’s journey.  Remember, It is not how you look, but rather how you feel about yourself and what to some might be just an average photo shoot, to you could be the discovery of a new chapter in your life—the empowerment chapter, the resurgence or whatever you wanna call it. All I know is you will never see yourself the same way again once we’re done.
              </p>
            </div>

          </div>
        )
      }

        <div ref="contact" className="contact">
          <h2>contact</h2>
            <span hidden ref="err" style={{color: 'red', fontWeight: 'bold'}}>Please fill all fields before submitting</span>
          <span hidden ref="ty" style={{color: 'white', fontWeight: 'bold', fontSize: 21}}>Thank You! Expect a response shortly!</span>
          <form>
            <label>
              <input ref="name" onChange={this.handleChange.bind(this)} type="text" name="name" placeholder="Name" />
            </label>
            <label>
              <input ref="email" onChange={this.handleChange.bind(this)} type="text" name="email" placeholder="Email" />
            </label>
            <label>
              <input ref="phone" onChange={this.handleChange.bind(this)} type="text" name="phone" placeholder="Phone" />
            </label>
            <label>
              <textarea ref="details" onChange={this.handleChange.bind(this)} type="text" name="details" placeholder="Please describe the type of shoot you are interested in." />
            </label>
            <input id="submit" ref="submit" onClick={this.handleSubmit.bind(this)} type="submit" value="Submit" />
          </form>
        </div>
        <div className="footer">
          <div>
            <a target="_blank" href="https://www.instagram.com/tlsshoots/"><FontAwesomeIcon color="#616161" icon={faInstagram} size="2x" /></a>
            <a target="_blank" href="mailto:info@tlsshoots.com"><FontAwesomeIcon color="#616161" icon={faEnvelope} size="2x" /></a>
          </div>
          <p>Copyright © 2018. All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default App;
