import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const NavDrawer = ({ open }) => {
  return (
    <div className={`side-drawer ${open ? 'open' : ''}`}>
      <Container>
        <div className="left">
          <ul>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="right">
          <img
            className="img-resp"
            src="https://images.unsplash.com/photo-1541580621-39f717ce77cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
      </Container>
    </div>
  );
};

export default NavDrawer;
