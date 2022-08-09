// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//*Плагіни
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const imagemin = require("gulp-imagemin"); // оптимізація зображень
const newer = require("gulp-newer"); // оптимізація зображень


// робота з image
const img = () => {
	return src(path.img.src) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(newer(path.img.dest)) // фільтрувати по даті міняння
		.pipe(imagemin(app.imagemin)) //
		.pipe(
			dest(path.img.dest)); // папка де збереження зображення
}

module.exports = img;
