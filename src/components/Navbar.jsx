import React from 'react';


export default function Navbar() {
  
  return (
    <>
      <nav className="navbar navbar-top fixed-top navbar-expand-lg" style={{ background: '#f9f9f9', display: 'flex', justifyContent: 'space-between' }} id="navbarTop">
        
        {/* site Logo */}
        <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
          <a className="navbar-brand me-1 me-sm-3" href="index.html">
            <div className="d-flex align-items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/632/632579.png" alt="flight-logo" width="27" />
              <h5 className="logo-text ms-2 d-none d-sm-block" style={{ margin: '0 0 0 5px' }}>Flight Status</h5>
            </div>
          </a>
        </div>

        {/* Navbar action menu */}
        <ul className="navbar-nav navbar-nav-icons flex-row">

          <li className="nav-item">
            <a className="nav-link" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search" style={{ height: '19px', width: '19px', marginBottom: '2px' }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link" href="/" style={{ minWidth: '2.25rem' }}>
              <span className="d-block" style={{ height: '20px', width: '20px' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell" style={{ height: '20px', width: '20px' }}>
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
              </span>
            </a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link" id="navbarDropdownNindeDots" href="/" role="button">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="2" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="8" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="14" r="2" fill="currentColor"></circle>
                <circle cx="8" cy="2" r="2" fill="currentColor"></circle>
                <circle cx="14" cy="2" r="2" fill="currentColor"></circle>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
