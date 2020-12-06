import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

import ReactMarkdown from 'react-markdown';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ColorSpan from '../colorSpan';
import ScrollCTA from '../scrollCTA';
import Fade from 'react-reveal/Fade';
import { Bounce, Slide, Zoom } from 'react-reveal';

const MainSection = () => {
  return (
    <Container id="introhome" className="container-home">
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
              <Fade top>
                <img
                  srcSet={
                    data.strapiHomepage.intropicture.childImageSharp.fluid
                      .srcSet
                  }
                  alt="Graphic design artwork"
                  className="img-resp"
                />
              </Fade>
            </Col>
            <Col sm={6} style={{ display: 'flex' }}>
              <div className="center-vertically">
                <Fade bottom>
                  <h2 className="intro-text">
                    {"Hi, I'm "}
                    <ColorSpan text="Patrycja Beblo" highlightColor="yellow" />
                    <br />
                    {'I '}
                    <ColorSpan text="design" highlightColor="orange" inverted />
                    {', '}
                    <ColorSpan text="travel" highlightColor="green" inverted />
                    {' & '}
                    <ColorSpan text="run" highlightColor="blue" inverted />
                  </h2>
                </Fade>
                <Fade bottom>
                  <ReactMarkdown>{data.strapiHomepage.introtext}</ReactMarkdown>
                </Fade>
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
