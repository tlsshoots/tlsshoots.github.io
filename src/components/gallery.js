import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ImageLoader from 'react-loading-image'
import Loader from 'react-loader-spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight, faChevronLeft, faTimes } from '@fortawesome/free-solid-svg-icons'

import logo from '../TLSLogo.png';
import img from '../tls-camera.jpg'
import cover from '../private.jpg'

import '../App.css';

library.add(faChevronRight)
library.add(faChevronLeft)
library.add(faTimes)

class Gallery extends Component {

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
      gallery: [],
      galleryAlbum: [],
    }
  }

  componentDidMount() {
    let _this = this;
    this.fadeOut();
    if (this.props.location.state) {
      setTimeout(function(){
        _this.setState({
          galleryAlbum: _this.props.location.state.album,
          activeImg: {index: 0, img: ''},
          activeImgStyle: {
            zIndex: -10,
            opacity: 0,
            transition: '.3s'
          }
        })
        _this.fadeIn();
      }, 0);

    } else {
      _this.getAlbum()
    }
  }

  async getAlbum() {
    let _this = this;

    fetch(`https://enigmatic-lake-22259.herokuapp.com/albums/${this.props.match.params.id}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*',
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((responseJson) => {
      console.log('responseJson', responseJson)
      _this.setState({
        galleryAlbum: {album: responseJson.album, images: responseJson.images},
        activeImg: {index: 0, img: ''},
        activeImgStyle: {
          zIndex: -10,
          opacity: 0,
          transition: '.3s'
        }
      })

      // console.log('=====API GET=====', sortedResp)
    })
    .catch(error => {
      console.log('=====API error=====', error)
    })
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

  renderGallery() {
    let gallery = this.state.galleryAlbum
    let array = [];
    if (gallery.images) {
      for (var i = 0; i < gallery.images.length; i++) {

        array.push(
          <div className="img-card" onClick={this.popImage.bind(this, gallery.images[i].url, i, gallery.images[i].id)}>
          <ImageLoader
          className="img-itm-reg"
          src={gallery.images[i].url}
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
    }
    return array;
  }

  popImage(cardImg, idx, imageId) {
    let _this = this;
    this.fadeOut();
    setTimeout(function(){
      _this.setState({
        activeImg: {index: idx, img: cardImg},
        activeImgStyle: {
          zIndex: 10,
          opacity: 1
        },
        imageId: imageId
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
        },
        imageId: 0
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


  nextPic(e) {
    e.preventDefault();
    console.log('here')
    let num = this.state.activeImg.index + 1
    if (num < this.state.galleryAlbum.images.length) {
      this.setState({
        activeImg: {
          index: num, img: this.state.galleryAlbum.images[num].url
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
          index: num, img: this.state.galleryAlbum.images[num].url
        }
      })
    }
  }

  setLinkStyle() {
    if (this.refs["pop"]) {
      let elem = this.refs["pop"]
      return {
        position: 'absolute',
        bottom: elem.bottom,
        height: elem.height,
        left: elem.left,
        right: elem.right,
        top: elem.top,
        width: elem.width,
        zIndex: 999999999
      }

    } else {
      return {height: 0}
    }
  }

  render() {
    return (
      <div style={{height: 'auto', position: 'relative'}}>

        <Link to="/"><img unselectable="on" src={logo} className="logo-2" alt="logo" /></Link>
        <div className="img-gal">
          {
            this.renderGallery()
          }
        </div>
        <div style={this.state.activeImgStyle}  className="pop-img">
            <div onClick={this.togglePopImage.bind(this)} style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0)'}}/>
            <img unselectable="on" ref="pop" src={this.state.activeImg.img} className="popped-img" style={{resizeMode: 'contain', transition: '1s', background: '#000', zIndex:10001}} alt="logo" />
            <Link to={`/images/${this.state.imageId}`} style={this.setLinkStyle()}>
            </Link>
            <FontAwesomeIcon onClick={this.prevPic.bind(this)} className="icon-l" style={{zIndex:10002}} icon={faChevronLeft} />
            <FontAwesomeIcon onClick={this.nextPic.bind(this)} className="icon-r" style={{zIndex:10002}} icon={faChevronRight} />
          </div>
      </div>
    );
  }
}

export default Gallery;
