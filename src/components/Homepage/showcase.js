import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import graphicVector from '../../assets/showcase-1.jpg';
import otherGraphicVector from '../../assets/showcase-2.jpg';
import userTestingVector from '../../assets/showcase-3.jpg';

const ShowCase = () => {
  return (
    <Container id="showcase" className="container-home">
      <Row className="home-section">
        <Col md={9}>
          <div className="thumbnail-left">
            <div className="thumbnail-left-text">
              <p className="title">Discover more about me</p>
              <p>
                My purpose is to listen and understand you to create interfaces
                that are visually appealing but also meaningful and inclusive.
              </p>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="thumbnail-right">
            <div className="thumbnail-item">
              <img src={graphicVector} alt="graphic img" />
            </div>
            <div className="thumbnail-item">
              <img src={otherGraphicVector} alt="graphic img" />
            </div>
            <div className="thumbnail-item">
              <img src={userTestingVector} alt="graphic img" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ShowCase;
