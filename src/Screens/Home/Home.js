import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Section3 from './EventAnd Cocerts/Section3';
import Section2 from './Food connoiser in you/Section2';
import './Home.css';
import Section4 from './Package and offers/Section4';
import Section5 from './Social Walls/Section5';
const Home = () => {
  const [corousal, setCorousal] = useState(1);
  return (
    <div className="home-container">
      <div className="corousal">
        <i
          className="left-icon"
          onClick={() => {
            setCorousal(corousal === 1 ? 2 : corousal - 1);
          }}
        ></i>
        <i
          className="right-icon"
          onClick={() => {
            setCorousal(corousal === 2 ? 1 : corousal + 1);
          }}
        ></i>
        <div
          className="corousal1"
          style={{ display: corousal === 2 ? 'none' : 'flex' }}
        >
          <div className="corousal1-text"></div>
        </div>
        <div
          className="corousal2"
          style={{ display: corousal === 1 ? 'none' : 'flex' }}
        >
          <div className="corousal1-text"></div>
        </div>
      </div>
      <section className="section1">
        <div className="section1-title">
          <i className="icon"></i>
          <span className="title"></span>
        </div>
        <div className="section1-banner">
          <div className="col1">
            <div className="text">WESTERN WEST</div>
          </div>
          <div className="col2">
            <div className="row1">
              <div className="img">
                <div className="text">CASUAL WEAR</div>
              </div>
            </div>
            <div className="row2">
              <div className="img">
                <div className="text">HAND BAGS</div>
              </div>
            </div>
            <div className="row3">
              <div className="img">
                <div className="text">HANDY KIT</div>
              </div>
            </div>
            <div className="row4">
              <div className="img">
                <div className="text">COATS</div>
              </div>
            </div>
          </div>
          <div className="col3">
            <div className="row1">
              <div className="img">
                <div className="text">CLASSICAL</div>
              </div>
            </div>
            <div className="row2">
              <div className="img">
                <div className="text">OCCASIONAL</div>
              </div>
            </div>
            <div className="row3">
              <div className="img">
                <div className="text">PARTY WEAR</div>
              </div>
            </div>
            <div className="row4">
              <div className="img">
                <div className="text">PHOTOSHOOT</div>
              </div>
            </div>
          </div>
          <div className="col4">
            <div className="row1">
              <div className="img">
                <div className="text">DAILY</div>
              </div>
            </div>
            <div className="row2">
              <div className="img">
                <div className="text">COTTON</div>
              </div>
            </div>
            <div className="row3">
              <div className="img">
                <div className="text">TSHITS</div>
              </div>
            </div>
            <div className="row4">
              <div className="img">
                <div className="text">STYLE</div>
              </div>
            </div>
          </div>
          <div className="col5"></div>
        </div>
      </section>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default Home;
