import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';

class Header extends Component {

  // constructor(props) {
  //   super(props);
  // }


  render() {
    return (
        <header className="header">
          <p onClick={() => {this.props.homeSwitch('about')}}>About</p>
          <p onClick={() => {this.props.contactSwitch()}}>Contact</p>
          <p onClick={() => {this.props.gallerySwitch()}}>Gallery</p>
        </header>
    );
  }
}

export default Header;
