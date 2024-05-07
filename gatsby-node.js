const { graphql } = require('gatsby');
const path = require('path');
const { graphqlTypegen } = require('./gatsby-config');

exports.createPages = async ({ actions, graphql }) => {
    const {createPage} = actions;

    const articles = await graphql(`
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

    articles.data.allNodeProjecte.nodes.map(articleData =>
        createPage({
            path: `/blog${articleData.path.alias}`,
            component: path.resolve('src/templates/pages.js'),
            context: {
                ArticleId: articleData.id,
            },
        })
    )
}