import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    const nav_link_style = {
      fontSize:'20px',
      fontWeight:'600',
    }
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark" data-bs-theme="dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Apni Khabar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <Link className="nav-link active px-3" style={nav_link_style} aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" style={nav_link_style} aria-current="page" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" style={nav_link_style} aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" style={nav_link_style} aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" style={nav_link_style} aria-current="page" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" style={nav_link_style} aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link px-3" style={nav_link_style} aria-current="page" to="/health">Health</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>  
      </div>
    )
  }
}

export default Navbar
