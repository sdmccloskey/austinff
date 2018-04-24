require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Austin Family Farm',
    shortName: 'AFF',
    description:
      'Life on the hill.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: process.env.GATSBY_GRAPHQLCMS_ENDPOINT,
        token: process.env.GATSBY_GRAPHQLCMS_TOKEN,
        // Get all remote data
        query: `{
          allPosts {
            id
            slug
            title
            content
            dateAndTime
            coverImage {
              handle
            }
          }
          allAuthors {
            id
            name
            bibliography
            avatar {
              handle
            }
          }
        }`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        get name() {
          return module.exports.siteMetadata.title;
        },
        get short_name() {
          return module.exports.siteMetadata.shortName;
        },
        start_url: '/',
        background_color: '#fafafa',
        theme_color: '#212121',
        display: 'minimal-ui',
        icon: 'src/images/',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-next',
    'gatsby-plugin-netlify',
  ],
};
