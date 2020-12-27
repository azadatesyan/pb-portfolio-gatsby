import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Fade from 'react-reveal/Fade';
import ReactMarkdown from 'react-markdown';

const Retour = ({ retour }) => {
  return (
    <Container className="container-home">
      <div className="text-center">
        <h2 className="project-title">
          {retour.titre || 'Retours utilisateurs'}
        </h2>
      </div>
      <Fade bottom>
        <div className="text-center p-3">
          <ReactMarkdown>{retour.texte}</ReactMarkdown>
        </div>
      </Fade>
    </Container>
  );
};

export default Retour;
