import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles/Home.css';
import platziconfLogoImage from '../images/platziconf-logo.svg';
// import astronautsImage from '../images/astronauts.svg';
import DrStone from "../images/Dr.Stone.jpg"

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="Home__col col-12 col-md-4">
              <img
                src={platziconfLogoImage}
                alt="Platzi Conf Logo"
                className="img-fluid mb-2"
              />

              {/* <h1>Badge Management System</h1> */}
              <h1>Platzi Badges: App para aplicar React JS</h1>
              <Link className="btn btn-primary" to="/badges">
                Start
              </Link>
            </div>

            <div className="Home__col d-none d-md-block col-md-8">
              <img
                // src={astronautsImage}
                src={DrStone}
                alt="Astronauts"
                className="img-fluid p-4"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
