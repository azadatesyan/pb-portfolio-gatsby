import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <Container fluid>
      <Row>
        <Col className="container-home footer">
          <div className="d-flex flex-row justify-content-around">
            <div className="d-flex flex-column justify-content-around">
              <div>
                <p>Phone</p>
                <p>+33 6 48 43 36 24</p>
              </div>
              <div>
                <p>Mail</p>
                <p>olivier.atesyan@gmail.com</p>
              </div>
              <div>
                <p>Social networks</p>
                <p>LinkedIn, Instagram</p>
              </div>
              <div>
                <p>2020 - Olivier Atesyan</p>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-around">
              <div>
                <p>Phone</p>
                <p>+33 6 48 43 36 24</p>
              </div>
              <div>
                <p>Mail</p>
                <p>olivier.atesyan@gmail.com</p>
              </div>
              <div>
                <p>Social networks</p>
                <p>LinkedIn, Instagram</p>
              </div>
              <div>
                <p>2020 - Olivier Atesyan</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
