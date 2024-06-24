import React, { Component } from 'react'

export default class Navbar extends Component {

  render() {
   
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">NEWS HUNT</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="nav-link active" aria-current="page" href="#">Home</button>
            </li>
            <li className="nav-item">
             <button className="nav-link">Sports</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Buisness</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Technoloy</button>
            </li>
            <li className="nav-item">
              <button className="nav-link" >Science</button>
            </li>
            <li className="nav-item">
              <button className="nav-link">Health</button>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Country
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">United kingdom</a></li>
                <li><a className="dropdown-item" href="#">Usa</a></li>
                <li><a className="dropdown-item" href="#">Germany</a></li>
                <li><a className="dropdown-item" href="#">Canada</a></li>
                <li><a className="dropdown-item" href="#">France</a></li>
                <li><a className="dropdown-item" href="#">Italy</a></li>
                <li><a className="dropdown-item" href="#">Russia</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}
