import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import ReactMarkdown from 'react-markdown';

const Retour = ({ retour }) => {
  return (
    <Container className="container-home">
      <div className="text-center">
        <ReactMarkdown>{retour.texte}</ReactMarkdown>
      </div>
    </Container>
  );
};

export default Retour;
