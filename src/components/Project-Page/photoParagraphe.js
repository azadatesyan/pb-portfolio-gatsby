import React from 'react';

import ReactMarkdown from 'react-markdown';

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

const PhotoParagraphe = ({ photoParagraphe }) => {
  return (
    <Container className="container-home">
      <div
        className={`d-flex ${
          photoParagraphe.orientation === 'horizontal'
            ? 'flex-row'
            : 'flex-column align-items-center'
        }`}>
        <div className="w-50 p-1">
          <img
            className="w-100 h-100"
            src={`http://localhost:1337${photoParagraphe.photo[0].url}`}
          />
        </div>
        <div className="w-50 p-1">
          <ReactMarkdown>{photoParagraphe.paragraphe}</ReactMarkdown>
        </div>
      </div>
    </Container>
  );
};

export default PhotoParagraphe;
