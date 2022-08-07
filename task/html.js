// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//*Плагіни

const gulpFileInclude = require("gulp-file-include"); // включити  частини html в головний файл
const htmlmin = require("gulp-htmlmin"); // зжати  html
const size = require("gulp-size"); // вихначення ваги файлів після зжимання
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку

// робота з HTML
const html = () => {
	return src(path.html.src) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(gulpFileInclude()) //виконати ключення частин файлів в основний файл
		.pipe(
			size({
				title: "до зжимання",
			}),
		)
		.pipe(htmlmin(app.htmlmin))
		.pipe(
			size({
				title: "після зжимання",
			}),
		)
		.pipe(dest(path.html.dest));
};

module.exports = html;
