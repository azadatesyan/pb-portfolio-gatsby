import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <Container fluid className="p-0">
      <div className="container-home footer text-center">
        <p className="title">Faisons connaissance !</p>
        <p>
          Contactez-moi pour discuter de votre projet, ou simplement pour faire
          connaissance 👋
        </p>
        <div className="d-flex flex-row justify-content-center w-50">
          <div>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
          <div>
            <FontAwesomeIcon icon={faMedium} size="2x" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
