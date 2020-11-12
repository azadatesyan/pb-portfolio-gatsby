import React from 'react';

import ReactMarkdown from 'react-markdown';

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const ImageSeule = ({ imageSeule }) => {
  return (
    <Container fluid className="container-home">
      {imageSeule.titre && (
        <div className="text-center">
          <h2 className="project-title">{imageSeule.titre}</h2>
        </div>
      )}
      <Row className={`pp-row-vertical`}>
        <Col lg={10}>
          <img
            className="img-resp"
            srcSet={imageSeule.image.childImageSharp.fluid.srcSet}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageSeule;
