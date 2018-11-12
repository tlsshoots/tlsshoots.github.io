import React, { Component } from 'react';
import axios from 'axios'
import logo from './TLSLogo.png';
import { FadeLoader } from 'react-spinners';
import Loader from 'react-loader-spinner'
import './App.css';
import img from './tls-camera.jpg'


import loading from './circle-of-dots-png.png'
import cover from './private.jpg'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/fontawesome-free-brands'

import ImageLoader from 'react-loading-image'

import Header from './components/header.js'
import {
  Delta, Baby, Downtown,
  Fun, Green, Motorsport, SKBrunch,
  Soiree, DeeDee, Mist, Bow, Munchies, Wedding
} from './gallery'

import {
  DeltaLow, DowntownLow, BabyLow,
  FunLow, GreenLow, MotorsportLow,
  SoireeLow, DeeDeeLow,
} from './lowRes.js'

library.add(faInstagram)
library.add(faTwitter)
library.add(faFacebook)
library.add(faEnvelope)
library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faTimes)

const albums = [
  {title: "S & K Brunch", images: SKBrunch, lowRes: []},
  {title: 'Wedding', images: Wedding, lowRes: []},
  {title: "Delta Alpha Zeta Fall 17", images: Delta, lowRes: DeltaLow},
  {title: "Baby Tiara", images: Baby, lowRes: BabyLow},
  {title: "Downtown Magazine x STK", images: Downtown, lowRes: DowntownLow},
  {title: "Fun and Family", images: Fun, lowRes: FunLow},
  {title: "Green Shields Travel", images: Green, lowRes: GreenLow},
  {title: "Motorsport", images: Motorsport, lowRes: MotorsportLow},
  {title: "Soiree in the Park", images: Soiree, lowRes: SoireeLow},
  {title: "NYC With Dee Dee", images: DeeDee, lowRes: DeeDeeLow},
  {title: "Boozy Brunch @ Mist", images: Mist, lowRes: []},
  {title: "Bow Wow x Power Wave", images: Bow, lowRes: []},
  {title: "Munchies Halloween Party", images: Munchies, lowRes: []}
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

  fadeIn(ms=0) {
    let _this = this;
    setTimeout(function(){
      _this.setState({
        opacity: 1,
      })
    }, ms);
  }

  fadeOut(ms=0) {
    let _this = this;
    setTimeout(function(){
      _this.setState({
        opacity: 0,
      })
    }, ms);
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
    }, 0);
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
      }, 0);
    } else {
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          body: 'contact'
        })
        _this.fadeIn();
      }, 0);
    }
  }

  // <img unselectable="on" src={gallery.lowRes[i]} className="img-itm-reg" alt="img-itm" />
  // <img unselectable="on" src={gallery.images[i]} className="img-itm-reg" alt="img-itm" />
  renderGallery(gallery) {
    let array = [];
    for (var i = 0; i < gallery.images.length; i++) {
      array.push(
        <div onClick={this.popImage.bind(this, gallery.images[i], i)} className="img-card">
          <ImageLoader
            className="img-itm-reg"
            src={gallery.images[i]}
            style={{color: '#fff'}}
            loading={() =>
              <Loader
                type="RevolvingDot"
                color="#616161"
                height="30"
                width="30"
                />
            }
            error={() => <div>Loading...</div>}
          />
          <img unselectable="on" src={cover} className="img-cover" alt="cover" />
          <p></p>
        </div>
      )
    }
    return array;
  }


  // <img unselectable="on" src={albums[i].lowRes[0]} className="img-itm" alt="img-itm" />
  // <img unselectable="on" src={albums[i].images[0]} className="img-itm" alt="img-itm" />
renderAlbums() {
    let array = [];
    for (var i = 0; i < albums.length; i++) {
      array.push(
        <div onClick={this.setGallery.bind(this, albums[i])} className="album-card">
            <ImageLoader
              className="img-itm"
              src={albums[i].images[0]}
              loading={() =>
                <Loader
                     type="RevolvingDot"
                     color="#616161"
                     height="30"
                     width="30"
                  />
              }
              error={() => <div>Loading...</div>}
            />
          <img unselectable="on" src={cover} className="img-cover" alt="cover" />
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
      }, 0);
  }

  clearGallery() {
    let _this = this;
      this.fadeOut();
      setTimeout(function(){
        _this.setState({
          gallery: _this.renderAlbums()
        })
        _this.fadeIn();
      }, 0);
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
    }, 0);
  }

  togglePopImage() {
    let _this = this

    this.fadeOut();
    setTimeout(function(){
      _this.setState({
        activeImgStyle: {
          zIndex: -10,
          opacity: 0,
        }
      })
      _this.fadeIn();
    }, 0);

    setTimeout(function(){
      _this.setState({
        activeImg: {index: 0, img: ''},
      })
      _this.fadeIn();
    }, 100);
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
      }, 0);
    } else if (this.state.body === 'contact') {
      this.toggleContact();
      setTimeout(function(){
        _this.setState({
          body: 'home'
        })
        _this.refs[sec].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
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
    if (num < this.state.galleryAlbum.images.length) {
      this.setState({
        activeImg: {
          index: num, img: this.state.galleryAlbum.images[num]
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
          index: num, img: this.state.galleryAlbum.images[num]
        }
      })
    }
  }

  render() {
    let contact = (
      <div ref="contact" className="contact">
        <img unselectable="on" src={img} className="bg" alt="logo" />

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
    )
    let gallery = (
      <div style={{height: 'auto', position: 'relative'}}>

        <img unselectable="on" src={logo} onClick={this.goHome.bind(this, 'home')} className="logo-2" alt="logo" />
        <div className="img-gal">
          {
            this.state.gallery
          }
        </div>
        <div style={this.state.activeImgStyle}  className="pop-img">
          <div onClick={this.togglePopImage.bind(this)}  style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0)'}}/>
          <img unselectable="on" ref="pop" src={this.state.activeImg.img} className="popped-img" style={{resizeMode: 'contain', transition: '1s', background: '#000', zIndex:10001}} alt="logo" />
          <FontAwesomeIcon onClick={this.prevPic.bind(this)} className="icon-l" style={{zIndex:10002}} icon={faChevronLeft} />
          <FontAwesomeIcon onClick={this.nextPic.bind(this)} className="icon-r" style={{zIndex:10002}} icon={faChevronRight} />
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

    // body = []
    // for (var i = 0; i < FunLow.length; i++) {
    //   body.push(<img unselectable="on" src={FunLow[i]} className="" alt="" style={{height: 100, width: 100}}/>)
    // }
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
