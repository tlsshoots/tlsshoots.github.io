import React, { Component } from 'react';
import { Link } from "react-router-dom";

import '../App.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <Link className="menuItm" to={{ pathname: '/', state: { about: 'true'} }}>
          About
        </Link>

        <Link className="menuItm" to="/contact">
          Contact
        </Link>

        <Link className="menuItm" to="/galleries">
          Gallery
        </Link>
      </header>
    );
  }
}

export default Header;
