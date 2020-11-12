import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import ReactMarkdown from 'react-markdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorSpan from '../colorSpan';
import ScrollCTA from '../scrollCTA';

const MainSection = () => {
  return (
    <Container className="container-home">
      <StaticQuery
        query={graphql`
          query {
            strapiHomepage {
              introtext
              intropicture {
                childImageSharp {
                  fluid {
                    srcSet
                  }
                }
              }
            }
          }
        `}
        render={(data) => (
          <Row className="home-section">
            <Col sm={6}>
              <img
                srcSet={
                  data.strapiHomepage.intropicture.childImageSharp.fluid.srcSet
                }
                alt="Graphic design artwork"
                className="img-resp"
              />
            </Col>
            <Col sm={6} style={{ display: 'flex' }}>
              <div className="center-vertically">
                <h2 className="intro-text">
                  {"Hi, I'm "}
                  <ColorSpan text="Patrycja Beblo" highlightColor="yellow" />
                  <br />
                  {'I '}
                  <ColorSpan text="design" highlightColor="orange" inverted />
                  {', '}
                  <ColorSpan text="travel" highlightColor="green" inverted />
                  {' & '}
                  <ColorSpan text="run" highlightColor="blue" inverted />.
                </h2>
                <ReactMarkdown>{data.strapiHomepage.introtext}</ReactMarkdown>
                <ScrollCTA text="Scroll" target="#showcase" />
              </div>
            </Col>
          </Row>
        )}
      />
    </Container>
  );
};

export default MainSection;
