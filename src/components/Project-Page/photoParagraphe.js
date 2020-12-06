import React from 'react';

import { Rotate, Fade, Slide } from 'react-reveal';
import ReactMarkdown from 'react-markdown';

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const PhotoParagraphe = ({ photoParagraphe }) => {
  const imgElement = ((extension) => {
    switch (extension) {
      case 'gif':
        return (
          <img className="img-resp" src={photoParagraphe.photo.publicURL} />
        );

      case 'mp4':
        return (
          <video
            controls
            className="img-resp"
            src={photoParagraphe.photo.publicURL}
          />
        );

      default:
        return (
          <img
            className="img-resp"
            srcSet={photoParagraphe.photo.childImageSharp.fluid.srcSet}
          />
        );
    }
  })(photoParagraphe.photo.extension);

  return (
    <Container
      fluid={photoParagraphe.orientation === 'vertical'}
      className="container-home">
      <div className="text-center">
        <h2 className="project-title">{photoParagraphe.titre}</h2>
      </div>
      <Fade bottom distance="150px">
        <div className={`row pp-row-${photoParagraphe.orientation}`}>
          <Col lg={photoParagraphe.orientation === 'vertical' ? 10 : 6}>
            {imgElement}
          </Col>
          <Col
            lg={photoParagraphe.orientation === 'vertical' ? 10 : 6}
            className="d-flex flex-column justify-content-center">
            <ReactMarkdown>{photoParagraphe.paragraphe}</ReactMarkdown>
          </Col>
        </div>
      </Fade>
    </Container>
  );
};

export default PhotoParagraphe;
