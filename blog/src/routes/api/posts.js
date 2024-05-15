const router = require('express').Router();

const { getAllPosts, getPostById, createPost, updatePost } = require('../../controllers/posts.controllers');
const { checkPostId } = require('../../helpers/middleware');


router.get('/', getAllPosts);
router.get('/:post_id', checkPostId, getPostById);
router.post('/', createPost);
router.put('/:post_id', checkPostId, updatePost);

module.exports = router;