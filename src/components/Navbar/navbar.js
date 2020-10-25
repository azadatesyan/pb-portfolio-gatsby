import React from 'react';

import Container from 'react-bootstrap/Container';

const Navbar = ({ open, setOpen }) => {
  return (
    <div className="navbar-container">
      <Container>
        <nav className="pb-navbar">
          <div className="pb-navbar-brand">
            <span>Patrycja </span>
            <span>Beblo</span>
          </div>
          <div
            onKeyUp={(e) => e.key === 'Enter' && setOpen(!open)}
            tabIndex="0"
            role="button"
            className={`menu-btn ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}>
            <div className="menu-btn-burger"></div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
