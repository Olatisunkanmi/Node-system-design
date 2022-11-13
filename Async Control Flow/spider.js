// To explain the problem of callbackd from hell and diffrenciate against the simple application of modularity and reusability , we will create a little web spider, a command-line
// application that takes in a web URL as input and downloads its contents locally into
// a file. In the code presented in this chapter, we are going to use a couple of npm
// dependencies:

const fs = require('fs');
const superagent = require('superagent');
const mkdirp = require('mkdirp');
const path = require('path');
const { urlToFilename } = require('./util');

// exports.spider = (url, cb) => {
// 	console.log(cb);

// 	const filename = urlToFilename(url);
// 	fs.access(filename, (err) => {
// 		// [1]
// 		if (err && err.code === 'ENOENT') {
// 			console.log(`Downloading ${url} into ${filename}`);
// 			superagent.get(url).end((err, res) => {
// 				// [2]
// 				if (err) {
// 					cb(err);
// 				} else {
// 					mkdirp(path.dirname(filename), (err) => {
// 						// [3]
// 						if (err) {
// 							cb(err);
// 						} else {
// 							fs.writeFile(filename, res.text, (err) => {
// 								// [4]
// 								if (err) {
// 									cb(err);
// 								} else {
// 									cb(null, filename, true);
// 								}
// 							});
// 						}
// 					});
// 				}
// 			});
// 		} else {
// 			cb(null, filename, false);
// 		}
// 	});
// };

function saveFile(filename, contents, cb) {
	mkdirp(path.dirname(filename), (err) => {
		if (err) {
			return cb(err);
		}
		fs.writeFile(filename, contents, cb);
	});
}

function download(url, filename, cb) {
	console.log(`Downloading ${url}`);
	superagent.get(url).end((err, res) => {
		if (err) {
			return cb(err);
		}
		saveFile(filename, res.text, (err) => {
			if (err) {
				return cb(err);
			}
			console.log(`Downloaded and saved: ${url}`);
			cb(null, res.text);
		});
	});
}

exports.spider = (url, cb) => {
	const filename = urlToFilename(url);
	fs.access(filename, (err) => {
		if (!err || err.code !== 'ENOENT') {
			// (1)
			return cb(null, filename, false);
		}
		download(url, filename, (err) => {
			if (err) {
				return cb(err);
			}
			cb(null, filename, true);
		});
	});
};
