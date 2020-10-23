import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Project = ({ data }) => {
  const tagsMarkup = data.tags.map((tag) => (
    <p className="project-tag">{tag}</p>
  ));

  return (
    <Row className="project">
      <Col sm={6}>
        <div>
          <h2> {data.title} </h2>
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
        </div>
      </Col>
      <Col sm={6}>
        <img className="project-image" src={data.image} alt={data.title} />
      </Col>
    </Row>
  );
};

export default Project;
