/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: `https://Champlainsolutions.com`,
  },
  plugins: ['gatsby-plugin-react-helmet'],
};


