import React, { useState } from 'react';

import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import ImageModal from './imageModal';

const ImageSeule = ({ imageSeule }) => {
  const [modalShow, setModalShow] = useState(false);

  const imgElement = ((extension) => {
    switch (extension) {
      case 'gif':
        return (
          <img
            onClick={() => setModalShow(true)}
            className="img-resp img-scale-animate"
            src={imageSeule.image.publicURL}
          />
        );

      case 'mp4':
        return (
          <video
            controls
            className="img-resp"
            src={imageSeule.image.publicURL}
          />
        );

      default:
        return (
          <img
            onClick={() => setModalShow(true)}
            className="img-resp img-scale-animate"
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
          <div className="col-lg-10">
            {imgElement}
            <ImageModal
              title={imageSeule.titre || 'Image'}
              show={modalShow}
              onHide={() => setModalShow(false)}
              imgsrc={imageSeule.image.publicURL}
            />
          </div>
        </Fade>
      </Row>
    </Container>
  );
};

export default ImageSeule;
