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
              url
            }
          }
        }
      `}
      render={(data) => (
        <Container id="showcase" className="container-home">
          <h5>À propos de moi</h5>
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
                  {data.strapiHomepage.homecarousel[0].url ? (
                    <img
                      srcSet={data.strapiHomepage.homecarousel[0].url}
                      alt="graphic img"
                    />
                  ) : (
                    <img
                      src={
                        'https://res.cloudinary.com/djirave24/image/upload/v1605639838/large_carousel_2_0b6085e49a.jpg'
                      }
                      alt="graphic img"
                    />
                  )}
                </div>
                <div className="thumbnail-item">
                  {data.strapiHomepage.homecarousel[1].url ? (
                    <img
                      srcSet={data.strapiHomepage.homecarousel[1].url}
                      alt="graphic img"
                    />
                  ) : (
                    <img
                      src={
                        'https://res.cloudinary.com/djirave24/image/upload/v1605639838/large_carousel_1_6a743ca954.jpg'
                      }
                      alt="graphic img"
                    />
                  )}
                </div>
                <div className="thumbnail-item">
                  {data.strapiHomepage.homecarousel[2].url ? (
                    <img
                      srcSet={data.strapiHomepage.homecarousel[2].url}
                      alt="graphic img"
                    />
                  ) : (
                    <img
                      src={
                        'https://res.cloudinary.com/djirave24/image/upload/v1605644222/large_IMG_0969_fa44df4b6c.jpg'
                      }
                      alt="graphic img"
                    />
                  )}
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
