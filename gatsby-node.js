exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        projects: allStrapiProject {
          edges {
            node {
              lien_url
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create projects pages
  const projects = result.data.projects.edges;
  projects.forEach((project) => {
    createPage({
      path: `/projects/${project.node.lien_url}`,
      component: require.resolve('./src/templates/project.js'),
      context: {
        link: project.node.lien_url
      }
    });
  });
};
