/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Gatsby",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-drupal`,
      options: {
        skipFileDownloads: true,
        baseUrl: `https://fde2-46-6-46-135.ngrok-free.app/drupal/`,
        apiBase: `jsonapi`, // optional, defaults to `jsonapi`
      },
    },
  ],
};