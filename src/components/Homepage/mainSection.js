import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import graphicArt from '../../assets/graphic-art.jpg';
import ColorSpan from '../colorSpan';
import ScrollCTA from '../scrollCTA';

const MainSection = () => {
  return (
    <Container className="container-home">
      <Row className="home-section">
        <Col sm={6}>
          <img
            src={graphicArt}
            alt="Graphic design artwork"
            className="img-resp"
          />
        </Col>
        <Col sm={6} style={{ display: 'flex' }}>
          <div className="center-vertically">
            <h2 className="intro-text">
              {"Hi, I'm "}
              <ColorSpan text="Patrycja Beblo" highlightColor="yellow" />
              <br />
              {'I '}
              <ColorSpan text="design" highlightColor="orange" inverted />
              {', '}
              <ColorSpan text="travel" highlightColor="green" inverted />
              {' & '}
              <ColorSpan text="run" highlightColor="blue" inverted />.
            </h2>
            <p>
              UI / UX designer and graphic designer in Paris, I am invariably
              looking for new opportunities to invent and experiment.
            </p>
            <ScrollCTA text="Scroll" target="#showcase" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
