const pathSrc = "./src";
const pathDest = "./public";

module.exports = {
	root: pathDest,

	html: {
		src: pathSrc + "/html/*.html",
		watcher: pathSrc + "/html/**/*.html",
		dest: pathDest,
	},

	pug: {
		src: pathSrc + "/pug/*.pug",
		watcher: pathSrc + "/pug/**/*.pug",
		dest: pathDest,
	},
};
