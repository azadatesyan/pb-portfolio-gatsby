import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { graphql, StaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const ShowCase = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          strapiHomepage {
            carouseltext
            carouseltitle
            homecarousel {
              formats {
                large {
                  childImageSharp {
                    fluid {
                      srcSet
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <Container id="showcase" className="container-home">
          <Row className="home-section">
            <Col md={9}>
              <div className="thumbnail-left">
                <div className="thumbnail-left-text">
                  <p className="title">{data.strapiHomepage.carouseltitle}</p>
                  <ReactMarkdown>
                    {data.strapiHomepage.carouseltext}
                  </ReactMarkdown>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="thumbnail-right">
                <div className="thumbnail-item">
                  <img
                    srcSet={
                      data.strapiHomepage.homecarousel[0].formats.large
                        .childImageSharp.fluid.srcSet
                    }
                    alt="graphic img"
                  />
                </div>
                <div className="thumbnail-item">
                  <img
                    srcSet={
                      data.strapiHomepage.homecarousel[1].formats.large
                        .childImageSharp.fluid.srcSet
                    }
                    alt="graphic img"
                  />
                </div>
                <div className="thumbnail-item">
                  <img
                    srcSet={
                      data.strapiHomepage.homecarousel[2].formats.large
                        .childImageSharp.fluid.srcSet
                    }
                    alt="graphic img"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      )}
    />
  );
};

export default ShowCase;
