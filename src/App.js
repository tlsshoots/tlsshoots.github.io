import React, { Component } from 'react';
import axios from 'axios'
import logo from './TLSLogo.png';
import './App.css';
import img from './tls-camera.jpg'
import cover from './private.jpg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faArrowCircleRight, faArrowCircleLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/fontawesome-free-brands'

import Header from './components/header.js'
import { Delta, Baby, Downtown, Fun, Green, Motorsport, Soiree, DeeDee } from './gallery'


library.add(faInstagram)
library.add(faTwitter)
library.add(faFacebook)
library.add(faEnvelope)
library.add(faArrowCircleRight)
library.add(faArrowCircleLeft)
library.add(faTimes)

const albums = [
  {title: "Delta Alpha Zeta Fall 17", images: Delta},
  {title: "Baby Tiara", images: Baby},
  {title: "Downtown Magazine x STK", images: Downtown},
  {title: "Fun and Family", images: Fun},
  {title: "Green Shields Travel", images: Green},
  {title: "Motorsport", images: Motorsport},
  {title: "Soiree in the Park", images: Soiree},
  {title: "DeeDee’s NYC Experience", images: DeeDee}
]


class App extends Component {

  constructor() {
    super();
    this.state = {
      opacity: 0,
      body: 'home',
      activeImg: {index: 0, img: ''},
      activeImgStyle: {
        zIndex: -10,
        opacity: 0
      },
      gallery: this.renderAlbums(),
      galleryAlbum: [],
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

  fadeIn(ms=200) {
    let _this = this;
    setTimeout(function(){
      _this.setState({
        opacity: 1,
      })
    }, ms);
  }

  fadeOut() {
    let _this = this;
    setTimeout(function(){
      _this.setState({
        opacity: 0,
      })
    }, 200);
  }

  toggleGallery() {
    let _this = this;
    this.fadeOut();
    setTimeout(function(){
      _this.setState({
        body: 'gallery',
        gallery: _this.renderAlbums()
      })
      _this.fadeIn();
    }, 800);
  }

  toggleContact() {
    let _this = this;
    if (this.state.body === 'contact') {
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          body: 'home'
        })
        _this.fadeIn();
      }, 800);
    } else {
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          body: 'contact'
        })
        _this.fadeIn();
      }, 800);
    }
  }

  renderGallery(gallery) {
    let array = [];
    for (var i = 0; i < gallery.length; i++) {
      array.push(
        <div onClick={this.popImage.bind(this, gallery[i], i)} className="img-card">
          <img src={gallery[i]} className="img-itm" alt="img-itm" />
          <img src={cover} className="img-cover" alt="cover" />
          <p></p>
        </div>
      )
    }
    return array;
  }


renderAlbums() {
    let array = [];
    for (var i = 0; i < albums.length; i++) {
      array.push(
        <div onClick={this.setGallery.bind(this, albums[i].images)} className="album-card">
          <img src={albums[i].images[0]} className="img-itm" alt="img-itm" />
          <img src={cover} className="img-cover" alt="cover" />
          <div className="album-n"></div>
          <p className="album-title">{albums[i].title}</p>
        </div>
      )
    }
    return array;
  }

  setGallery(arr) {
    let _this = this;
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          galleryAlbum: arr,
          gallery: _this.renderGallery(arr),
          activeImg: {index: 0, img: ''},
          activeImgStyle: {
            zIndex: -10,
            opacity: 0,
            transition: '.3s'
          }
        })
        _this.fadeIn();
      }, 800);
  }

  clearGallery() {
    let _this = this;
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          gallery: _this.renderAlbums()
        })
        _this.fadeIn();
      }, 800);
  }

  popImage(cardImg, idx) {
    let _this = this;
    this.fadeOut();
    setTimeout(function(){
      _this.setState({
        activeImg: {index: idx, img: cardImg},
        activeImgStyle: {
          zIndex: 10,
          opacity: 1
        }
      })
      _this.fadeIn();
    }, 800);
  }

  togglePopImage() {
    let _this = this

    this.fadeOut();
    setTimeout(function(){
      _this.setState({
        activeImg: {index: 0, img: ''},
        activeImgStyle: {
          zIndex: -10,
          opacity: 0,
        }
      })
      _this.fadeIn();
    }, 800);
  }

  goHome(sec) {
    let _this = this
    if(this.state.body === 'gallery'){
      this.toggleGallery();
      setTimeout(function(){
        _this.setState({
          body: 'home'
        })
        _this.refs[sec].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 800);
    } else if (this.state.body === 'contact') {
      this.toggleContact();
      setTimeout(function(){
        _this.setState({
          body: 'home'
        })
        _this.refs[sec].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 800);
    } else {
      setTimeout(function(){
        _this.setState({
          body: 'home'
        })
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
      this.refs['submit'].style.display = 'none'
      this.refs['ty'].hidden = false

    await axios.post('https://expresstls.herokuapp.com/mail', {
        name: name,
        email: email,
        phone: phone,
        details: details
      })
    } else {
      this.refs['err'].hidden = false
      this.refs['contact'].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  }

  nextPic(e) {
    e.preventDefault();
    let num = this.state.activeImg.index + 1
    if (num < this.state.galleryAlbum.length) {
      this.setState({
        activeImg: {
          index: num, img: this.state.galleryAlbum[num]
        }
      })
    }
  }

  prevPic(e) {
    e.preventDefault();
    let num = this.state.activeImg.index - 1
    if (num >= 0) {
      this.setState({
        activeImg: {
          index: num, img: this.state.galleryAlbum[num]
        }
      })
    }
  }

  render() {
    let contact = (
      <div ref="contact" className="contact">
        <img src={img} className="bg" alt="logo" />

        <h2>Contact</h2>
        <span hidden ref="err" style={{color: '#f44336', fontWeight: 'bold'}}>Please fill all fields before submitting</span>
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
          <div className="submit" ref="submit" onClick={this.handleSubmit.bind(this)} type="submit" value="Submit">
            <h3>Submit</h3>
          </div>
        </form>
      </div>
    )
    let home =  (
      <div ref='home'>
        <div className="top">
          <img src={img} className="bg" alt="logo" />

          <div className="splash">
            <img src={logo} className="logo" alt="logo" />
            <div></div>
          </div>
        </div>

        <div ref="about" className="about">
          <p>
            <span
               style={{fontSize: 25, color: '#d4ae93'}}>
               About Me
             </span><br/><br/><br/>
           I’m Terrance Shields and I am an 8 year US Army Veteran with a passion for Photography, Travel and Good Conversation with Great People. Everyone’s story of life is a beautiful kaleidoscope mixed with what we do and not always knowing where we are going. Photography allows me to capture your most personal moments for you to save as a  reminder of your life’s journey.  Remember, It is not how you look, but rather how you feel about yourself and what to some might be just an average photo shoot, to you could be the discovery of a new chapter in your life—the empowerment chapter, the resurgence or whatever you want to call it. All I know is you will never see yourself the same way again once we’re done.
          </p>
        </div>

      </div>
    )
    let gallery = (
      <div style={{height: 'auto', position: 'relative'}}>

        <img src={logo} onClick={this.goHome.bind(this, 'home')} className="logo-2" alt="logo" />
        <div className="img-gal">
          {
            this.state.gallery
          }
        </div>
        <div style={this.state.activeImgStyle}  className="pop-img">
          <img src={this.state.activeImg.img} className="popped-img" style={{resizeMode: 'contain', transition: '1s', background: '#000'}} alt="logo" />
          <img src={cover} className="img-cover" alt="cover" />
          <FontAwesomeIcon onClick={this.prevPic.bind(this)} className="icon-l" icon={faArrowCircleLeft} />
          <FontAwesomeIcon onClick={this.nextPic.bind(this)} className="icon-r" icon={faArrowCircleRight} />
          <FontAwesomeIcon onClick={this.togglePopImage.bind(this)} className="icon-x" icon={faTimes} />
        </div>
      </div>
    )

    let body = (<div/>)

    if (this.state.body === 'home') {
      body = home;
    } else if (this.state.body === 'gallery') {
      body = gallery;
    } else {
      body = contact;
    }

    return (
      <div className="App" style={{opacity: this.state.opacity}}>
        <Header homeSwitch={this.goHome.bind(this)} gallerySwitch={this.toggleGallery.bind(this)} contactSwitch={this.toggleContact.bind(this)} />
        { body }
        <div className="footer">
          <div>
            <a target="_blank" href="https://www.instagram.com/tlsshoots/">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
            <a target="_blank" href="https://twitter.com/tlsshoots">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a target="_blank" href="hhttps://www.facebook.com/TLS-Shoots-LLC-326188911277649/">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
            <a target="_blank" href="mailto:info@tlsshoots.com">
              <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </div>
          <p style={{color: '#424242', fontSize: 12}}>Copyright © 2018. All Rights Reserved</p>
        </div>
      </div>
    );
  }
}

export default App;
