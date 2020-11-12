import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';

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
          <Link to={`/${data.url}`}>See more</Link>
        </p>
      </Col>
      <Col md={6} className="d-flex">
        <Link to={`/${data.url}`}>
          <img className="project-image" src={data.image} alt={data.title} />
        </Link>
      </Col>
    </Row>
  );
};

export default Project;
