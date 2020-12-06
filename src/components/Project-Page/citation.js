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
            <div>{quotedCitation}</div>
          </Fade>
        </h2>
        <p>
          <strong>
            <Fade bottom>
              <div>{citation.auteur}</div>
            </Fade>
          </strong>
        </p>
      </div>
    </Container>
  );
};

export default Citation;
