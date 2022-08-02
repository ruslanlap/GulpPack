module.exports = {
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
};
