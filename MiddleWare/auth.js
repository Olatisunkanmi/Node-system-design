const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../ap.json`));

exports.checkID = (req, res, next) => {
	let id = req.params.id * 1;
	const tour = tours.find((el) => el.id === id);
	// console.log(tour);
	if (!tour) {
		return res.status(500).json({
			status: 'Failed',
			message: 'Invalid  ID',
		});
	}

	next();
};

exports.checkBody = (req, res, next) => {
	const { type, media, location, author } = req.body;
	if (!type || !media || !location || !author) {
		return res.status(500).json({
			status: 'Failed',
			message: 'Missing Parameters ',
		});
	}
	next();
};
exports.checkUserUpdate = (req, res, next) => {
	const { id } = req.params;
	const { name } = req.body;
	console.log(id, name);
	if (!name || !id) {
		return res.status(500).json({
			status: 'Failed',
			message: 'Missing Parameters ',
		});
	}
	next();
};
