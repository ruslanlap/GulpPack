// загальне  підключення GULP
const { src,dest,watch,series,parallel } = require("gulp");
const browsersync = require("browser-sync").create(); //запустити сервер
const del = require("del"); // видалити  папку

//*Плагіни

const gulpFileInclude = require("gulp-file-include"); // включити  частини html в головний файл
const htmlmin = require("gulp-htmlmin"); // зжати  html
const size = require("gulp-size"); // вихначення ваги файлів після зжимання
const plumber = require("gulp-plumber"); // перевіряти помилки
const notify = require("gulp-notify"); // вивести помилку
// const rename = require("gulp-rename"); // перейменувати

// робота з HTML
const html = () => {
	return src("./src/html/*.html") // маски шляхів
		.pipe(plumber({ errorHandler: notify.onError() })) // вивести помилку
		.pipe(gulpFileInclude()) //виконати ключення частин файлів в основний файл
		.pipe(
			size({
				title: "до зжимання",
			}),
		)
		.pipe(
			htmlmin({
				collapseWhitespace: true,
				removeComments: true,
			}),
		)
		.pipe(
			size({
				title: "після зжимання",
			}),
		)
		.pipe(dest("./public"))
		.pipe(browsersync.stream());
};

//спостерігач
const watcher = () => {
	watch("./src/html/**/*.html", html);
};

// // чистити директорію
const clears = () => {
	return del("./public/");
}

// server
function server() {
  browsersync.init({
    server: {
      baseDir: "./public",
    },
  });
}

// задачі
exports.html = html;
// exports.css = css;
// exports.js = js;
exports.watch = watcher;
exports.clears = clears;

// серія
exports.dev = series(clears,html,
	parallel(watcher,server)
)