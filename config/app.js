// const isProd = process.argv.includes("--production");
// const isDev = !isProd;

module.exports = {
	// isProd: isProd,
	// isDev: isDev,

	htmlmin: {
		collapseWhitespace: true,
		removeComments: true,
	},

	pug: {
		pretty: true,
		data: {
			news: require("../data/news.json"),
		},
	},

	webpack: {
		mode: "development",
		// mode: isProd ? "production" : "development",
	},

	imagemin: {
		verbose: true,
	},

	fonter: {
		formats: ["ttf", "woff", "eot", "svg"],
	},
};
