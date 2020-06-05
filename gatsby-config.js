module.exports = {
  siteMetadata: {
    title: `Conde House Style 2020 July`,
    description: `カンディハウススタイル2020特設サイトです。北海道旭川の地でものづくりを続けて52年のカンディハウスによる新製品発表やデザイナートークのイベントのご案内です。`,
    author: `のむらパターソン和孝`,
    image: "static/card.png"
  },
  plugins: [
    {
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       // The property ID; the tracking code won't be generated without it
       trackingId: "UA-33520120-6",
       // Defines where to place the tracking script - `true` in the head and `false` in the body
       head: true,
       // Setting this parameter is optional
       anonymize: true,

     },
   },
    {
    resolve: "gatsby-plugin-social-cards",
    options: {
      // ommit to skip
      authorImage: "./static/img/coffee-art.jpg",
      // image to use when no cover in frontmatter
      backgroundImage: "/static/card.png",
      // author to use when no auth in frontmatter
      defaultAuthor: "knp",
      // card design
      design: "default", // 'default' or 'card'
    },
  },

    `gatsby-plugin-scroll-reveal`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#cc0000`,
        theme_color: `#cc0000`,
        display: `minimal-ui`,
        icon: `src/images/favicon-32x32.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `lato\:400, 700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },

    {
  resolve: "gatsby-plugin-social-cards",
  options: {
    // ommit to skip
    authorImage: "./static/img/coffee-art.jpg",
    // image to use when no cover in frontmatter
    backgroundImage: "./static/card.pnggatsby",
    // author to use when no auth in frontmatter
    // card design
    design: "default", // 'default' or 'card'
  },
},
{
	resolve: 'gatsby-remark-video',
	options: {
		height: 'auto',
		preload: 'auto',
		muted: true,
		autoplay: true,
		playsinline: true,
		controls: true,
		loop: true
	}
},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
