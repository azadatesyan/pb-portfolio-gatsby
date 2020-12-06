import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';

import Fade from 'react-reveal/Fade';

const Project = ({ data }) => {
  const tagsMarkup = data.tags.map((tag) => (
    <p className="project-tag">{tag}</p>
  ));

  return (
    <Fade {...data.fadeProps}>
      <div className="project row">
        <Col md={6} className="project-left">
          <Link className="seemore-cta" to={`/${data.url}`}>
            <h2> {data.title} </h2>
          </Link>
          <p> {data.description} </p>
          <div className="d-flex flex-row justify-content-center">
            {tagsMarkup}
          </div>
        </Col>
        <Col md={6} className="project-right">
          <Link to={`/${data.url}`}>
            <img className="project-image" src={data.image} alt={data.title} />
          </Link>
        </Col>
      </div>
    </Fade>
  );
};

export default Project;
