// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//*Плагіни
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const autoprefixer = require("gulp-autoprefixer"); // для старіших версій браузера
const csso = require("gulp-csso"); // зжати стилі
const rename = require("gulp-rename"); // для  того щоб було 2 різні файли зжатий  і повний
const size = require("gulp-size"); // для  того щоб було 2 різні файли зжатий  і повний
const shorthand = require("gulp-shorthand"); // плагін для скорочення записів в CSS
const groupСssMediaQueries = require("gulp-group-css-media-queries"); // плагін для скорочення записів в CSS
const sass = require("gulp-sass")(require("sass"));
const sassGlob = require("gulp-sass-glob");
const webpCss = require("gulp-webp-css"); // плагін для скорочення записів в CSS

// робота з SCSS
const scss = () => {
	return src(path.scss.src, { sourcemaps: true }) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(sassGlob()) // для пошуку глобальних файлів
		.pipe(sass()) // компіляція sass
		.pipe(webpCss()) // компіляція sass
		.pipe(autoprefixer()) //для  роботи в різних браузерах і старих версіях
		.pipe(shorthand()) //для  роботи в різних браузерах і старих версіях
		.pipe(groupСssMediaQueries()) // групувати медіа запити
		.pipe(size({ title: "style.css" })) //розмір файлу до зжатого
		.pipe(
			dest(path.scss.dest, {
				sourcemaps: true,
			}),
		)
		.pipe(rename({ suffix: ".min" })) // файл зжатий
		.pipe(csso()) //зжати  стилі
		.pipe(size({ title: "style.min.css" })) //розмір файлу до зжатого
		.pipe(
			dest(path.scss.dest, {
				sourcemaps: true,
			}),
		);
};

module.exports = scss;


