import React from 'react';
import Logo from './logo';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route}
  from 'react-router-dom';

import './header.css';
import imageLogo from '../logo.svg'


const Nav =({home, listjobs, detailblog}) => {
  const navStyle ={
    color:'gray'
  };
  return (
 
      <nav className="navBar">
        <div className="logo">
          <Logo logo={imageLogo}/>
        </div>
        <div className="searchJobs">
          <Link style={navStyle} to={'/listjobs'}>
              <div><h5>Search Jobs</h5></div>
              <div><i className="fas fa-search fa-2x"></i></div>
          </Link>
        </div>
      </nav>
    
  )
}

export default Nav;