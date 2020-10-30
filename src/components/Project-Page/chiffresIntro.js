import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const ChiffresIntro = ({ chiffres }) => {
  return (
    <Container className="container-home">
      <div className="chiffres-container">
        {chiffres.map((chiffre) => (
          <div>
            <h2>{chiffre.chiffre}</h2>
            <h2>{chiffre.chiffre_description}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ChiffresIntro;
