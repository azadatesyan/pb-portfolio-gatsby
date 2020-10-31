import React from 'react';
import Container from 'react-bootstrap/Container';

const Citation = ({ citation }) => {
  return (
    <Container className="container-home">
      <div className="text-center">
        <h2 className="citation">"{citation.citation}"</h2>
        <p>
          <strong>{citation.auteur}</strong>
        </p>
      </div>
    </Container>
  );
};

export default Citation;
