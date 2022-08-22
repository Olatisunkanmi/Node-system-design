const router = require('express').Router();
const PostController = require('../Controllers/PostController');
const AuthMiddleWare = require('../MiddleWare/auth');

router
	.route('/')
	.get(PostController.getAllPosts)
	.post(AuthMiddleWare.checkBody, PostController.createPosts);

router
	.route('/:id')
	.get(AuthMiddleWare.checkID, PostController.getAPost)
	.delete(AuthMiddleWare.checkID, PostController.deletePost)
	.patch(
		AuthMiddleWare.checkBody,
		AuthMiddleWare.checkID,
		PostController.updatePost,
	);

router.route('/:id/sortpost').get(PostController.sortPost);
router.route('/:id/likepost').patch(PostController.LikePost);

module.exports = router;
