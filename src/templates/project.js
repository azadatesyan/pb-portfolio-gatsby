import React from 'react';
import { graphql } from 'gatsby';

import ReactMarkdown from 'react-markdown';

import Layout from '../components/layout';
import Container from 'react-bootstrap/esm/Container';

export const query = graphql`
  query SprintProjectQuery($link: String!) {
    strapiSprintProject(lien_url: { eq: $link }) {
      chiffres_intro {
        chiffre
        chiffre_description
      }
      citation_utilisateur
      cover {
        childImageSharp {
          fluid {
            src
          }
        }
      }
      description
      introduction
      nom
      problematique
      tags
      paragraphe_carrousel {
        paragraphe
        ordre
        photos {
          url
        }
      }
      photo_paragraphe {
        ordre
        paragraphe
        photo {
          url
        }
      }
    }
  }
`;

const ProjectPage = ({ data }) => {
  const project = data.strapiSprintProject;
  return (
    <Layout>
      <Container fluid className="container-home no-padding-x">
        <div className="project-cover">
          <img
            className="img-resp"
            src={`http://localhost:1337${project.photo_paragraphe[0].photo[0].url}`}
          />
          <h1>{project.nom}</h1>
        </div>
      </Container>

      {/* Si chiffres d'intro alors créer section */}

      {project.chiffres_intro && (
        <Container className="container-home">
          <div className="d-flex flex-row justify-content-around text-center">
            {project.chiffres_intro.map((chiffre) => (
              <div>
                <h2>{chiffre.chiffre}</h2>
                <h2>{chiffre.chiffre_description}</h2>
              </div>
            ))}
          </div>
        </Container>
      )}

      {/* Fin chiffres d'intro */}

      <Container className="container-home">
        <h2 className="subtitle">Concept</h2>
        <p>{project.introduction}</p>
      </Container>
    </Layout>
  );
};

export default ProjectPage;
