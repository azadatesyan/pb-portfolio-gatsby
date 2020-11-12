import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import graphicVector from '../../assets/showcase-1.jpg';
import otherGraphicVector from '../../assets/showcase-2.jpg';
import userTestingVector from '../../assets/showcase-3.jpg';
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
                medium {
                  url
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
                    src={data.strapiHomepage.homecarousel[0].formats.medium.url}
                    alt="graphic img"
                  />
                </div>
                <div className="thumbnail-item">
                  <img
                    src={data.strapiHomepage.homecarousel[1].formats.medium.url}
                    alt="graphic img"
                  />
                </div>
                <div className="thumbnail-item">
                  <img
                    src={data.strapiHomepage.homecarousel[2].formats.medium.url}
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
