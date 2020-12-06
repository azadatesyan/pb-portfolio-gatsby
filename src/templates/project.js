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
import ImageSeule from '../components/Project-Page/imageSeule';

import Fade from 'react-reveal/Fade';

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
      image_seule {
        ordre
        titre
        image {
          extension
          publicURL
          childImageSharp {
            fluid {
              srcSet
            }
          }
        }
      }
      paragraphe_texte {
        texte
        ordre
      }
      cover {
        childImageSharp {
          fluid {
            srcSet
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
        titre
        orientation
        paragraphe
        photo {
          extension
          publicURL
          childImageSharp {
            fluid {
              srcSet
            }
          }
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

  const typedParagraphe = project.paragraphe_texte.map((element) =>
    addType(element, 'paragraphe_texte')
  );

  const typedImageSeule = project.image_seule.map((element) =>
    addType(element, 'image_seule')
  );

  const typedElements = [
    ...typedPhotoParagraphe,
    ...typedCitation,
    ...typedParagraphe,
    ...typedImageSeule
  ];

  const typedProblematique =
    project.problematique && addType(project.problematique, 'problematique');
  project.problematique && typedElements.push(typedProblematique);

  const orderedElements = orderElements(typedElements);

  return (
    <Layout>
      {/* Jumbotron image cover */}

      <Container fluid className="pt-5 no-padding-x">
        <div className="project-cover">
          <img
            className="img-resp"
            srcSet={project.cover.childImageSharp.fluid.srcSet}
          />
          <h1>
            <Fade top>{project.nom}</Fade>
          </h1>
        </div>
      </Container>

      {/* Si chiffres d'intro alors créer section */}

      {project.chiffres_intro && (
        <ChiffresIntro chiffres={project.chiffres_intro} />
      )}

      {/* Paragraphe d'introduction */}

      <Container fluid className="container-home">
        <h2 className="project-title">Projet</h2>
        <Fade bottom distance="150px">
          <ReactMarkdown className="text-justify">
            {project.introduction}
          </ReactMarkdown>
        </Fade>
      </Container>

      {/* Tous les autres éléments */}

      {orderedElements.map((element) => {
        switch (element.type) {
          case 'photo_paragraphe':
            return <PhotoParagraphe photoParagraphe={element} />;

          case 'citation_utilisateur':
            return <Citation citation={element} />;

          case 'paragraphe_texte':
            return <Retour retour={element} />;

          case 'problematique':
            return <Problematique problematique={element} />;

          case 'image_seule':
            return <ImageSeule imageSeule={element} />;

          default:
            break;
        }
      })}
    </Layout>
  );
};

export default ProjectPage;
