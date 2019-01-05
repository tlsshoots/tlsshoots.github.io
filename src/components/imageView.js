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

class ImageView extends Component {

  constructor() {
    super();
    this.state = {
      opacity: 0,
      activeImg: '',
      activeImgStyle: {
        zIndex: 10,
        opacity: 1
      }
    }
  }

  componentDidMount() {
    let _this = this;
    if (this.props.location.state) {
      // debugger
      setTimeout(function(){
        _this.setState({
          activeImg: '',
        })
      }, 0);

    } else {
      _this.getImage()
    }
  }

  async getImage() {
    let _this = this;

    fetch(`https://enigmatic-lake-22259.herokuapp.com/images/${this.props.match.params.id}`, {
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
        activeImg: responseJson.url,
        activeImgStyle: {
          zIndex: 10,
          opacity: 1,
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






  render() {
    return (
      <div style={{height: 'auto', position: 'relative', padding: 100, paddingBottom: 0}}>


          <img unselectable="on" ref="pop" src={this.state.activeImg} className="popped-img" style={{resizeMode: 'contain', transition: '1s', background: '#000', zIndex:10001}} alt="logo" />

      </div>
    );
  }
}

export default ImageView;
