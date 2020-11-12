import React from 'react';

import { Link, StaticQuery, graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';

const NavDrawer = ({ open }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allStrapiLink {
            edges {
              node {
                id
                name
                url_path
              }
            }
          }
          strapiHomepage {
            menupicture {
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
        <div className={`side-drawer ${open ? 'open' : ''}`}>
          <Container>
            <div className="left">
              <ul>
                {data.allStrapiLink.edges.map((link) => {
                  return (
                    <li key={link.node.id}>
                      <Link to={link.node.url_path}>{link.node.name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="right">
              <img
                alt="Graphic Design Artwork"
                className="img-resp"
                srcSet={
                  data.strapiHomepage.menupicture.childImageSharp.fluid.srcSet
                }
              />
            </div>
          </Container>
        </div>
      )}
    />
  );
};

export default NavDrawer;
