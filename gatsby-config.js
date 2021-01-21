module.exports = {
  siteMetadata: {
    title: `Gatsby Silly Site`,
    description: `Simple Gatsby Starter With Tailwind CSS`,
    author: `@maikap_dipankar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby_Tailwind`,
        short_name: `Gatsby_Tailwind`,
        start_url: `/`,
        background_color: `#319795`,
        theme_color: `#8a4baf`,
        display: `standalone`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available, please see the additional resources below.
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true, // Enable tailwindcss support
        purgeOnly: [`src/css/global.css`], // Purge only these files/folders
      },
    },
    `gatsby-plugin-offline`,
  ],
};
