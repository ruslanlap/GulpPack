const del = require("del"); // видалити папку

//configs

const path = require("../config/path.js"); // підключення шляхів

// // чистити директорію
const clears = () => {
	return del(path.root);
};

module.exports = clears;
