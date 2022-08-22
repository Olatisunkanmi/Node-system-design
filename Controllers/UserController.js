exports.getAllUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			User: 'User Data',
		},
	});
};

exports.createUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			User: 'User Created',
		},
	});
};

exports.getAUser = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			User: 'User Data',
		},
	});
};

exports.updateUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			User: 'User updated',
		},
	});
};

exports.deleteUsers = (req, res) => {
	res.status(200).json({
		status: 'success',
		data: {
			User: null,
		},
	});
};
