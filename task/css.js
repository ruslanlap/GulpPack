// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//*Плагіни
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const concat = require("gulp-concat"); // звести до купи файли
const cssimport = require("gulp-cssimport"); // імпорт з файлів в один файл
const autoprefixer = require("gulp-autoprefixer"); // для старіших версій браузера
const csso = require("gulp-csso"); // зжати стилі
const rename = require("gulp-rename"); // для  того щоб було 2 різні файли зжатий  і повний
const size = require("gulp-size"); // для  того щоб було 2 різні файли зжатий  і повний
const shorthand = require("gulp-shorthand"); // плагін для скорочення записів в CSS
const groupСssMediaQueries = require("gulp-group-css-media-queries"); // плагін для скорочення записів в CSS
const webpCss = require("gulp-webp-css"); // плагін для скорочення записів в CSS

// робота з CSS
const css = () => {
	return src(path.css.src, { sourcemaps: true }) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(concat("style.css")) // об'єднати файли в один файл стилів
		.pipe(cssimport()) // об'єднати файли в один файл стилів з певною назвою
		.pipe(webpCss()) //для  роботи в різних браузерах і старих версіях
		.pipe(autoprefixer()) //для  роботи в різних браузерах і старих версіях
		.pipe(shorthand()) //для  роботи в різних браузерах і старих версіях
		.pipe(groupСssMediaQueries()) // групувати медіа запити
		.pipe(size({ title: "style.css" })) //розмір файлу до зжатого
		.pipe(
			dest(path.css.dest, {
				sourcemaps: true,
			}),
		)
		.pipe(rename({ suffix: ".min" })) // файл зжатий
		.pipe(csso()) //зжати  стилі
		.pipe(size({ title: "style.min.css" })) //розмір файлу до зжатого
		.pipe(
			dest(path.css.dest, {
				sourcemaps: true,
			}),
		);
};

module.exports = css;
