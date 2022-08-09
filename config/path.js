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
	css: {
		src: pathSrc + "/css/*.css",
		watcher: pathSrc + "/css/**/*.css",
		dest: pathDest + "/css",
	},
	scss: {
		src: pathSrc + "/sass/*.{sass,scss}",
		watcher: pathSrc + "/sass/**/*.{sass,scss}",
		dest: pathDest + "/css",
	},

	js: {
		src: pathSrc + "/js/*.js",
		watcher: pathSrc + "/js/**/*.js",
		dest: pathDest + "/js",
	},

	img: {
		src: pathSrc + "/img/*.{png,jpg,.jpeg,gif,svg}",
		watcher: pathSrc + "/img/**/*.{png,jpg,.jpeg,gif,svg}",
		dest: pathDest + "/img",
	},

};
