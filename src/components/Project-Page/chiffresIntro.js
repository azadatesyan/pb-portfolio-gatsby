import React from 'react';
import Container from 'react-bootstrap/esm/Container';

const ChiffresIntro = ({ chiffres }) => {
  return (
    <Container className="container-home">
      <div className="chiffres-container">
        {chiffres.map((chiffre) => {
          const chiffreEspace = chiffre.chiffre
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
          return (
            <div>
              <h2>{chiffreEspace}</h2>
              <h2 className="chiffre-description">
                {chiffre.chiffre_description}
              </h2>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default ChiffresIntro;
