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
          <p onClick={() => {this.props.homeSwitch('about')}}>about</p>
          <p onClick={() => {this.props.homeSwitch('contact')}}>contact</p>
          <p onClick={() => {this.props.gallerySwitch()}}>gallery</p>
        </header>
    );
  }
}

export default Header;
