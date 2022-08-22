const fs = require('fs');

const dummyData = JSON.parse(
	fs.readFileSync(`${__dirname}/../ap.json`),
);
console.log(dummyData == []);

exports.getAllPosts = (req, res) => {
	console.log(dummyData[0].id);
	res.status(200).json({
		status: 'success',
		results: dummyData.length,
		data: {
			post: dummyData,
		},
	});
};

exports.createPosts = (req, res) => {
	const newId = dummyData[dummyData.length - 1].id + 1;
	const newPost = Object.assign({ id: newId }, req.body);
	dummyData.push(newPost);

	res.status(200).json({
		status: 'success',
		results: dummyData.length,
		data: {
			post: dummyData,
		},
	});
};

exports.getAPost = (req, res) => {
	let id = req.params.id * 1;
	const post = dummyData.find((el) => el.id === id);

	res.status(200).json({
		status: 'success',
		results: post.length,
		data: {
			post: post,
		},
	});
};

exports.updatePost = (req, res) => {
	let id = req.params.id * 1;
	const post = dummyData.find((el) => el.id === id);
	const newPost = Object.assign(post, req.body);
	console.log(newPost);

	res.status(200).json({
		status: 'success',
		results: post.length,
		data: {
			post: post,
		},
	});
};

exports.deletePost = (req, res) => {
	const id = req.params.id * 1;
	const index = dummyData.findIndex((el) => el.id === id);
	const deleted = dummyData.splice(index, 1);
	res.status(200).json({
		status: 'success',
		results: dummyData.length,
		data: {
			post: null,
		},
	});
};

exports.LikePost = (req, res) => {
	const id = req.params.id * 1;
	let PostLikes = dummyData.find((el) => el.id === id).likes + 1;
	PostLikes = Object.assign({ likes: PostLikes }, req.body);
	res.status(200).json({
		status: 'Review Added',
		PostLikes: PostLikes,
	});
};

exports.sortPost = (req, res) => {
	const id = req.params.id * 1;
	let smallest = dummyData[0].likes;
	dummyData.sort((a, b) => b.likes - a.likes);

	res.status(200).json({
		status: 'Review Added',
		data: dummyData,
	});
};
