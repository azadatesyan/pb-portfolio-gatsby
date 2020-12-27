import React from 'react';
import Container from 'react-bootstrap/Container';
import Fade from 'react-reveal/Fade';

const Citation = ({ citation }) => {
  const quotedCitation = `"${citation.citation}"`;

  return (
    <Container fluid className="container-home mybg-primary">
      <div className="text-center">
        <h2 className="citation">
          <Fade bottom>
            <p>{quotedCitation}</p>
          </Fade>
        </h2>
        <div>
          <div>
            <Fade bottom>
              <strong>{citation.auteur}</strong>
            </Fade>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Citation;
