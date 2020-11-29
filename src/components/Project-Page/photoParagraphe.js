import React from 'react';

import ReactMarkdown from 'react-markdown';

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const PhotoParagraphe = ({ photoParagraphe }) => {
  return (
    <Container
      fluid={photoParagraphe.orientation === 'vertical'}
      className="container-home">
      <div className="text-center">
        <h2 className="project-title">{photoParagraphe.titre}</h2>
      </div>
      <Row className={`pp-row-${photoParagraphe.orientation}`}>
        <Col lg={photoParagraphe.orientation === 'vertical' ? 10 : 6}>
          <img
            className="img-resp"
            srcSet={photoParagraphe.photo.childImageSharp.fluid.srcSet}
          />
        </Col>
        <Col
          lg={photoParagraphe.orientation === 'vertical' ? 10 : 6}
          className="d-flex flex-column justify-content-center">
          <ReactMarkdown>{photoParagraphe.paragraphe}</ReactMarkdown>
        </Col>
      </Row>
    </Container>
  );
};

export default PhotoParagraphe;
