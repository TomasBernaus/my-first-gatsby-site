const { graphql } = require('gatsby');
const path = require('path');
const { graphqlTypegen } = require('./gatsby-config');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const projectes = await graphql(`
    query MyQuery {
        allNodeProjecte {
            nodes {
              id
              title
              body {
                processed
              }
              path {
                alias
              }
            }
          }
      }
    `);

  projectes.data.allNodeProjecte.nodes.map(projecteData =>
    createPage({
      path: `/blog${projecteData.path.alias}`,
      component: path.resolve('src/templates/pages.js'),
      context: {
        ProjecteId: projecteData.id,
      },
    })
  )

  const articles = await graphql(`
  query MyQuery {
    allNodeArticle {
      nodes {
        id
        title
        body {
          processed
        }
        path {
          alias
        }
      }
    }
  }
  `);

articles.data.allNodeArticle.nodes.map(articleData =>
  createPage({
    path: `/blog${articleData.path.alias}`,
    component: path.resolve('src/templates/article.js'),
    context: {
      ArticleId: articleData.id,
    },
  })
)
}