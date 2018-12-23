import React, { Component } from 'react';
import axios from 'axios'
import img from '../tls-camera.jpg'
import '../App.css';

class Contact extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      details: ''
    }
  }

  componentDidMount() {

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

  render() {
    return (
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
    );
  }
}

export default Contact;
