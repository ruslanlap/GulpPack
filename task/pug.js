// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//*Плагіни
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const pugs = require("gulp-pug"); //
const webpHtml = require("gulp-webp-html"); //

// робота з PUG
const pug = () => {
	return src(path.pug.src) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(pugs(app.pug)) //without minification
		.pipe(webpHtml()) //
		.pipe(dest(path.pug.dest));
};

module.exports = pug;
