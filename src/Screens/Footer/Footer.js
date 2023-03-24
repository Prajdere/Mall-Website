import React from 'react';
import './Footer.css';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { TfiPinterest } from 'react-icons/tfi';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="col1">ALL RIGHT RESERVED | COPYRIGHT 2023</div>
      <div className="col2">
        <span>Get Direction</span>
        <span>Floor Map</span>
        <span>Event</span>
        <span>Environ Partner</span>
      </div>
      <div className="col3">
        <ImFacebook className="icon" />
        <BsTwitter className="icon" />
        <BsYoutube className="icon" />
        <BsInstagram className="icon" />
        <TfiPinterest className="icon" />
      </div>
    </div>
  );
};

export default Footer;
