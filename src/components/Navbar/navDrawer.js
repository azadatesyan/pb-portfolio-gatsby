import React from 'react';

import { Link, StaticQuery, graphql } from 'gatsby';

import Container from 'react-bootstrap/Container';

const NavDrawer = ({ open }) => {
  return (
    <div className={`side-drawer ${open ? 'open' : ''}`}>
      <Container>
        <div className="left">
          <ul>
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
                }
              `}
              render={(data) =>
                data.allStrapiLink.edges.map((link) => {
                  return (
                    <li key={link.node.id}>
                      <Link to={link.node.url_path}>{link.node.name}</Link>
                    </li>
                  );
                })
              }
            />
          </ul>
        </div>
        <div className="right">
          <img
            alt="Graphic Design Artwork"
            className="img-resp"
            src="https://images.unsplash.com/photo-1541580621-39f717ce77cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </div>
      </Container>
    </div>
  );
};

export default NavDrawer;
