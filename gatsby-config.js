module.exports = {
  siteMetadata: {
    title: 'Roberto Vázquez González',
    siteUrl: `https://robertovg.com`,
    description: 'Roberto Vázquez González Personal Web Site',
    author: 'Roberto Vázquez González',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1260,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/images/favicon.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-5525453-12',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: 'gatsby-plugin-feed-generator',
      options: {
        generator: `GatsbyJS`,
        rss: true, // Set to false to stop rss generation
        json: true, // Set to false to stop json feed generation
        siteQuery: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              author
            }
          }
        }
      `,
        // The plugin requires frontmatter of date, path(or slug/url), and title at minimum
        feedQuery: `
          {
            allMarkdownRemark(
              sort: {order: DESC, fields: [frontmatter___date]},
              limit: 100,
              ) {
              edges {
                node {
                  html
                  frontmatter {
                    date
                    path
                    title
                  }
                }
              }
            }
          }
          `,
      },
    },
  ],
};
