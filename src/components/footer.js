import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/fontawesome-free-brands'



library.add(faInstagram)
library.add(faTwitter)
library.add(faFacebook)
library.add(faEnvelope)


class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <div>
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/tlsshoots/">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/tlsshoots">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TLS-Shoots-LLC-326188911277649/">
              <FontAwesomeIcon className="icon" icon={faFacebook} />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:info@tlsshoots.com">
            <FontAwesomeIcon className="icon" icon={faEnvelope} />
            </a>
          </div>
          <p style={{color: '#424242', fontSize: 12}}>
            Copyright © 2018. All Rights Reserved
          </p>
        </div>
    );
  }
}

export default Footer;
