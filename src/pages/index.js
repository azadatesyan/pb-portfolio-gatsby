import React from 'react';
// import { Link } from "gatsby"
import { graphql, StaticQuery } from 'gatsby';

import Container from 'react-bootstrap/esm/Container';
import Project from '../components/project';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MainSection from '../components/Homepage/mainSection';
import ShowCase from '../components/Homepage/showcase';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainSection />
    <ShowCase />
    <Container id="projectslist" className="container-home">
      <h5>Mes projets</h5>
      <StaticQuery
        query={graphql`
          query {
            allStrapiProject {
              edges {
                node {
                  description
                  id
                  nom
                  tags
                  lien_url
                  cover {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) =>
          data.allStrapiProject.edges.map((project) => {
            let propsToPass = {
              title: project.node.nom,
              description: project.node.description,
              image: project.node.cover.childImageSharp.fluid.src,
              url: `projects/${project.node.lien_url}`,
              tags: project.node.tags.split(',')
            };

            return <Project data={propsToPass} />;
          })
        }
      />
    </Container>
  </Layout>
);

export default IndexPage;
