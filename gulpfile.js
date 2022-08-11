// загальне  підключення GULP
const { watch, series, parallel } = require("gulp");
const browsersync = require("browser-sync").create(); //запустити сервер

//configs
const path = require("./config/path.js"); // підключення шляхів

// задачі паку
const clears = require("./task/clears.js");
const pug = require("./task/pug.js");
const scss = require("./task/scss.js");
const js = require("./task/js.js");
const img = require("./task/img.js");

//спостерігач
const watcher = () => {
	watch(path.pug.watcher, pug).on("all", browsersync.reload);
	watch(path.scss.watcher, scss).on("all", browsersync.reload);
	watch(path.js.watcher, js).on("all", browsersync.reload);
	watch(path.img.watcher, img).on("all", browsersync.reload);
};

// server
function server() {
	browsersync.init({
		server: {
			baseDir: path.root,
		},
	});
}

// задачі
exports.pug = pug;
exports.scss = scss;
exports.js = js;
exports.img = img;
exports.watch = watcher;
exports.clears = clears;

// серія
exports.dev = series(clears, parallel(pug, scss, js, img), parallel(watcher, server));


