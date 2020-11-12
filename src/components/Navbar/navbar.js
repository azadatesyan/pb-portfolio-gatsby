import { Link } from 'gatsby';
import React from 'react';

import Container from 'react-bootstrap/Container';

const Navbar = ({ open, setOpen }) => {
  return (
    <div className="navbar-container">
      <Container>
        <nav className="pb-navbar">
          <div className="pb-navbar-brand">
            <Link to="/">
              <span>Patrycja </span>
              <span>Beblo</span>
            </Link>
          </div>
          <div
            onKeyUp={(e) => e.key === 'Enter' && setOpen(!open)}
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
