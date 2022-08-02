// загальне  підключення GULP
const { src, dest, watch, series, parallel } = require("gulp");
const browsersync = require("browser-sync").create(); //запустити сервер
const del = require("del"); // видалити  папку

//*Плагіни

const gulpFileInclude = require("gulp-file-include"); // включити  частини html в головний файл
const htmlmin = require("gulp-htmlmin"); // зжати  html
const size = require("gulp-size"); // вихначення ваги файлів після зжимання
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const pugs = require("gulp-pug"); //

// робота з PUG
const pug = () => {
	return src("./src/pug/*.pug") // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(
			pugs({
				pretty: true,
				data: {
					news: require("./data/news.json"),
				},
			}),
		) //without minification
		.pipe(dest("./public"))
		.pipe(browsersync.stream());
};

//спостерігач
const watcher = () => {
	watch("./src/pug/**/*.pug", pug);
};

// // чистити директорію
const clears = () => {
	return del("./public/");
};

// server
function server() {
	browsersync.init({
		server: {
			baseDir: "./public",
		},
	});
}

// задачі
exports.pug = pug;
// exports.css = css;
// exports.js = js;
exports.watch = watcher;
exports.clears = clears;

// серія
exports.dev = series(clears, pug, parallel(watcher, server));
