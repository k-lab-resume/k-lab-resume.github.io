module.exports = {
  siteMetadata: {
    title: `K-Lab`,
    siteUrl: `https://k-lab-resume.github.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/contents`,
        name: `contents`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 650,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              icon: false,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: false,
              elements: [`h2`, `h4`],
            },
          },
          `gatsby-remark-smartypants`,
          `gatsby-remark-responsive-iframe`,
          /*
          This plugin requires both width and height attributes to be set on the iframe or object tag
          so that the correct aspect ratio can be calculated. 
          Both unitless and pixel values are supported. If any other value is detected 
          (for example a percentage width), the wrapper will not be applied.
          */
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    /* `gatsby-plugin-local-search` */
    {
      resolve: `gatsby-plugin-canonical-urls`,
        options: {
          siteUrl: `https://k-lab-resume.github.io`,
        },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://k-lab-resume.github.io',
          sitemap: 'https://k-lab-resume.github.io/sitemap-index.xml',
          policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `K-Lab`,
        short_name: `K-Lab`,
        start_url: `/home`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `static/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
