module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Sanam Limbu - Full stack developer",
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-anchor-links",
			options: {
				offset: -100,
			},
		},
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images/`,
			},
		},
	],
}
