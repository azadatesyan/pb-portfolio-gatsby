import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'react-bootstrap/esm/Container';

const Problematique = ({ problematique }) => {
  return (
    <Container className="container-home">
      <div className="text-center">
        <h2>
          <Fade bottom>{problematique.problematique}</Fade>
        </h2>
      </div>
    </Container>
  );
};

export default Problematique;
