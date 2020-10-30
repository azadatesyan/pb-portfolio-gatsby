import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const Problematique = ({ problematique }) => {
  return (
    <Container className="container-home">
      <div className="text-center">
        <h2>{problematique.problematique}</h2>
      </div>
    </Container>
  );
};

export default Problematique;
