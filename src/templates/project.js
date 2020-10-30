import React from 'react';
import { graphql } from 'gatsby';

import ReactMarkdown from 'react-markdown';

import addType from '../util/addType';
import orderElements from '../util/orderElements';

import Layout from '../components/layout';
import Container from 'react-bootstrap/esm/Container';
import ChiffresIntro from '../components/Project-Page/chiffresIntro';
import Citation from '../components/Project-Page/citation';
import PhotoParagraphe from '../components/Project-Page/photoParagraphe';
import Problematique from '../components/Project-Page/problematique';
import Retour from '../components/Project-Page/retour';

export const query = graphql`
  query ProjectQuery($link: String!) {
    strapiProject(lien_url: { eq: $link }) {
      chiffres_intro {
        chiffre
        chiffre_description
      }
      citation_utilisateur {
        citation
        auteur
        ordre
      }
      retour_utilisateur {
        texte
        ordre
      }
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
      problematique {
        problematique
        ordre
      }
      tags
      photo_paragraphe {
        ordre
        orientation
        paragraphe
        photo {
          url
        }
      }
    }
  }
`;

const ProjectPage = ({ data }) => {
  const project = data.strapiProject;

  const typedPhotoParagraphe = project.photo_paragraphe.map((element) =>
    addType(element, 'photo_paragraphe')
  );

  const typedCitation = project.citation_utilisateur.map((element) =>
    addType(element, 'citation_utilisateur')
  );

  const typedRetour = project.retour_utilisateur.map((element) =>
    addType(element, 'retour_utilisateur')
  );

  const typedProblematique = addType(project.problematique, 'problematique');

  const typedElements = [
    ...typedPhotoParagraphe,
    ...typedCitation,
    ...typedRetour,
    typedProblematique
  ];

  const orderedElements = orderElements(typedElements);

  return (
    <Layout>
      {/* Jumbotron image cover */}

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
        <ChiffresIntro chiffres={project.chiffres_intro} />
      )}

      {/* Paragraphe d'introduction */}

      <Container className="container-home">
        <h2 className="subtitle">Concept</h2>
        <ReactMarkdown>{project.introduction}</ReactMarkdown>
      </Container>

      {/* Tous les autres éléments */}

      {orderedElements.map((element) => {
        switch (element.type) {
          case 'photo_paragraphe':
            return <PhotoParagraphe photoParagraphe={element} />;

          case 'citation_utilisateur':
            return <Citation citation={element} />;

          case 'retour_utilisateur':
            return <Retour retour={element} />;

          case 'problematique':
            return <Problematique problematique={element} />;

          default:
        }
      })}
    </Layout>
  );
};

export default ProjectPage;
