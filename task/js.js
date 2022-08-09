// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//*Плагіни
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const babel = require("gulp-babel"); // вивести помилку
const webpack = require("webpack-stream");


// робота з JavaScript
const js = () => {
	return src(path.js.src, { sourcemaps: true }) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(babel()) //
		.pipe(webpack(app.webpack)) //для
		.pipe(
			dest(path.js.dest, {
				sourcemaps: true,
			}),
		);
};

module.exports = js;
