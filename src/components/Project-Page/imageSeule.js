import React from 'react';

import ReactMarkdown from 'react-markdown';
import Fade from 'react-reveal/Fade';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const ImageSeule = ({ imageSeule }) => {
  const imgElement = ((extension) => {
    switch (extension) {
      case 'gif':
        return <img className="img-resp" src={imageSeule.image.publicURL} />;

      case 'mp4':
        return <video className="img-resp" src={imageSeule.image.publicURL} />;

      default:
        return (
          <img
            className="img-resp"
            srcSet={imageSeule.image.childImageSharp.fluid.srcSet}
          />
        );
    }
  })(imageSeule.image.extension);

  return (
    <Container fluid className="container-home">
      {imageSeule.titre && (
        <div className="text-center">
          <h2 className="project-title">{imageSeule.titre}</h2>
        </div>
      )}
      <Row className={`pp-row-vertical`}>
        <Fade left>
          <div className="col-lg-10">{imgElement}</div>
        </Fade>
      </Row>
    </Container>
  );
};

export default ImageSeule;
