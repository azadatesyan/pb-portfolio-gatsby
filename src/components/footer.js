import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <h5>Contact</h5>
      <div className="container-home footer text-center">
        <p className="title">Faisons connaissance !</p>
        <p>
          Contactez-moi pour discuter de votre projet, ou simplement pour faire
          connaissance 👋
        </p>
        <div className="d-flex flex-row justify-content-around w-50 mx-auto">
          <div>
            <a href="https://www.linkedin.com/in/patrycja-beblo/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
          <div>
            <a href="mailto:patrycja.beblo@hotmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
          <div>
            <a href="https://medium.com/@paty.b">
              <FontAwesomeIcon icon={faMedium} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
