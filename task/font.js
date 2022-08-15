// загальне  підключення GULP
const { src, dest } = require("gulp");

//configs
const path = require("../config/path.js"); // підключення шляхів
const app = require("../config/app.js"); // підключення шляхів

//plugins
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
const newer = require("gulp-newer"); // оптимізація зображень
const fonter = require("gulp-fonter"); // оптимізація зображень
const ttf2woff2 = require("gulp-ttf2woff2"); // оптимізація зображень

// робота з fonts
const font = () => {
	return src(path.font.src) // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(newer(path.font.dest)) // фільтрувати по даті міняння
		.pipe(fonter(app.fonter)) // робота з шрифтами
		.pipe(dest(path.font.dest)) // public де збереження зображення
		.pipe(ttf2woff2()) //робота з типами шрифтів
		.pipe(dest(path.font.dest)); // public де збереження зображення
};
module.exports = font;
