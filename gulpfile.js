// загальне  підключення GULP
const { watch, series, parallel } = require("gulp");
const browsersync = require("browser-sync").create(); //запустити сервер

//configs
const path = require("./config/path.js"); // підключення шляхів

// задачі паку
const clears = require("./task/clears.js");
const pug = require("./task/pug.js");
const css = require("./task/css.js");

//спостерігач
const watcher = () => {
	watch(path.pug.watcher, pug).on("all", browsersync.reload);
	watch(path.css.watcher, css).on("all", browsersync.reload);
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
exports.css = css;
// exports.js = js;
exports.watch = watcher;
exports.clears = clears;

// серія
exports.dev = series(clears, parallel(pug, css), parallel(watcher, server));
