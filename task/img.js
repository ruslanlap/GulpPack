// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//plugins
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const imagemin = require("gulp-imagemin"); // оптимізація зображень
const newer = require("gulp-newer"); // оптимізація зображень
const webp = require("gulp-webp"); // оптимізація зображень
// const gulpIf = require("gulp-if"); // оптимізація зображень

// робота з image
const img = () => {
	return src(path.img.src) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(newer(path.img.dest)) // фільтрувати по даті міняння
		.pipe(webp()) //
		.pipe(dest(path.img.dest)) // public де збереження зображення
		.pipe(src(path.img.src)) //
		.pipe(newer(path.img.dest)) // фільтрувати по даті міняння
		.pipe(imagemin()) //
		.pipe(dest(path.img.dest)); // public де збереження зображення
};

module.exports = img;
