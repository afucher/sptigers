module.exports = {
  siteMetadata: {
    title: `São Paulo Tigers`,
    description: `Uma das equipes de flag football mais antigas e tradicionais em atividade no estado de São Paulo.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SÃO PAULO TIGERS`,
        short_name: `SP TIGERS`,
        start_url: `/`,
        background_color: `#ff6e0b`,
        theme_color: `#ff6e0b`,
        display: `minimal-ui`,
        icon: `src/images/tigers.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
