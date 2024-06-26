// const { graphql } = require('gatsby');
const path = require('path');
// const { graphqlTypegen } = require('./gatsby-config');

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
// projectes
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
      path: projecteData.path.alias,
      component: path.resolve('src/templates/projecte.js'),
      context: {
        ProjecteId: projecteData.id,
        title: projecteData.title,
      },
    })
  )
  // fi projectes

  // articles
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
      path: articleData.path.alias,
      component: path.resolve('src/templates/article.js'),
      context: {
        ArticleId: articleData.id,
        title: articleData.title,
      },
    })
  )
  //fi articles

}