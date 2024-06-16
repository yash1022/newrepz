import React,{useState} from 'react'

import PropTypes from 'prop-types'
import Buttons from './Buttons';
import { Link } from 'react-router-dom';

export default function Navbar(property) {

  


  
  
  return (
    <>


<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={property.mode}>
  <div className="container-fluid" >
    <a className="navbar-brand" href="/">{property.p1}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{property.p2}</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{property.p3}</a>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/About" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {property.p4}
          </Link>
         
        </li>
       
      </ul>
       
        <Buttons mode={property.mode}></Buttons>
        <button className="btn btn-outline-success" type="submit" onClick={property.toggle}>{property.mode === 'light' ? 'dark' : 'light'}</button>
      
    </div>
  </div>
</nav>

    </>
  )
  }
  
  Navbar.propTypes=
  {
      p1:PropTypes.string,
      p2:PropTypes.string,
      p3:PropTypes.string,
      p4:PropTypes.string,
      p5:PropTypes.string,
      p6:PropTypes.string,
      mode:PropTypes.string
  
      
  };