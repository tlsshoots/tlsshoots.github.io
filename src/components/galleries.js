import React, { Component } from 'react';
import { Link } from "react-router-dom";
import ImageLoader from 'react-loading-image'
import Loader from 'react-loader-spinner'

import logo from '../TLSLogo.png';
import img from '../tls-camera.jpg'
import cover from '../private.jpg'
import '../App.css';

class Galleries extends Component {

  constructor() {
    super();
    this.state = {
      opacity: 0,
      albums: []
    }
  }

  componentDidMount() {
    this.getAlbums()
  }

  async getAlbums() {
    fetch('https://enigmatic-lake-22259.herokuapp.com/albums', {
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
      let sortedResp = responseJson.map(obj => {
        let result = {album: obj.album, images: obj.images.reverse()}
        return result
      })

      this.setState({
        albums: sortedResp.reverse()
      })

      console.log('=====API GET=====', sortedResp)
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



renderAlbums() {
    let array = [];
    for (var i = 0; i < this.state.albums.length; i++) {
      array.push(
        <Link to={{ pathname: '/gallery', state: { album: this.state.albums[i]} }}>
          <div className="album-card">
          <ImageLoader
            className="img-itm"
            src={this.state.albums[i].images[this.state.albums[i].album.cover].url}
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
          <p className="album-title">{this.state.albums[i].album.title}</p>
          </div>
        </Link>
      )
    }
    return array;
  }

  render() {
    return (
      <div style={{height: 'auto', position: 'relative'}}>

        <img
          unselectable="on" src={logo}
          className="logo-2" alt="logo"
        />

        <div className="img-gal">
          {
            this.renderAlbums()
          }
        </div>
      </div>
    );
  }
}

export default Galleries;
