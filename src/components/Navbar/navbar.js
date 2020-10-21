import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

const Navbar = ({ open, handleOpen }) => {
  return (
    <div className="navbar-container">
      <Container>
        <nav className="pb-navbar">
          <div className="pb-navbar-brand">
            <span>Patrycja </span>
            <span>Beblo</span>
          </div>
          <div
            className={`menu-btn ${open ? 'open' : ''}`}
            onClick={() => handleOpen(!open)}>
            <div className="menu-btn-burger"></div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
