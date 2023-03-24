import React from 'react';
import './Navbar.css';
import { ImLocation2 } from 'react-icons/im';
import { MdCall } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { BiMenuAltLeft } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="col1">
        <div className="row1">DAILY 11.00 AM TO 07.00 PM</div>
        <div className="row2">
          <ImLocation2 className="icon" />
          <MdCall className="icon" />
          <IoIosMail className="icon" />
        </div>
      </div>
      <div className="col2">
        <div className="image-container"></div>
        <div className="navbar-container">
          <span>HOME</span>
          <span>BRANDS</span>
          <span>DINING</span>
          <span>ENTERTAINMENT</span>
          <span>OFFERS & PACKAGES</span>
          <span>COVID 19</span>
        </div>
      </div>
      <div className="col3">
        <div className="row1">
          <CgProfile className="icon" />
          Sign in / Sign up
        </div>
        <div className="row2">
          <BiMenuAltLeft className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
