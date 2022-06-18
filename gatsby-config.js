require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `melatika-gatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-yandex-metrika`,
    options: {
      // The ID of yandex metrika.
      trackingId: 89237812,
      // Enabled a webvisor. The default value is `false`.
      webvisor: true,
      // Enables tracking a hash in URL. The default value is `false`.
      trackHash: true,
      // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
      // and `true` means after the body (faster loading, less hits). The default value is `false`.
      afterBody: true,
      // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
      // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
      defer: false,
    },
  }
]
};

