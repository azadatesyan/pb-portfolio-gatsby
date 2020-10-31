import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = ({ data }) => {
  const tagsMarkup = data.tags.map((tag) => (
    <p className="project-tag">{tag}</p>
  ));

  return (
    <Row className="project">
      <Col md={6} className="project-left">
        <a className="seemore-cta" href={`/${data.url}`}>
          <h2> {data.title} </h2>
        </a>
        <p> {data.description} </p>
        <div className="d-flex flex-row">{tagsMarkup}</div>
        <p className="seemore-cta">
          <a
            href={`/${data.url}`}
            //   style={{ textDecoration: 'none', color: 'black', width: 'auto' }}
          >
            See more
          </a>
        </p>
      </Col>
      <Col md={6} className="d-flex">
        <a href={`/${data.url}`}>
          <img className="project-image" src={data.image} alt={data.title} />
        </a>
      </Col>
    </Row>
  );
};

export default Project;
