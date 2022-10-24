import React, { Component } from 'react'
import './style.css';
import qr_code from './qr-code.png';

class QR extends Component {
  render() {
    return (
      <div className="container">
        <img className="qr-code" src={qr_code} alt="QR code"/>
        <span className="title">Improve your frontend skills by building projects and projects and more projects</span>
        <span className="subtitle">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level!</span>
      </div>
    );
  }
}

export default QR;
