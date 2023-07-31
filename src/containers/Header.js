import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div className="ui fixed inverted menu">
        <div className="ui container">
          <a href="#" className="header item">
            {/* <img className="logo" src="assets/images/logo.png"> */}
            <h4>Fex</h4>
          </a>
          <Link to="/" className="item">Home</Link>
          <div className="ui simple dropdown item">
            Categories <i className="dropdown icon"></i>
            <div className="menu">
              <a className="item" href="#">Men</a>
              <a className="item" href="#">Women</a>
              <div className="divider"></div>
              <div className="header">Header Item</div>
              <div className="item">
                <i className="dropdown icon"></i>
                Sub Menu
                <div className="menu">
                  <a className="item" href="#">Link Item</a>
                  <a className="item" href="#">Link Item</a>
                </div>
              </div>
              <a className="item" href="#">Link Item</a>
            </div>
          </div>
        </div>
      </div>
    )
}
