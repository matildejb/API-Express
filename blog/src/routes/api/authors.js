const router = require('express').Router();

const { getAllAuthors, getAuthorById, createAuthor, updateAuthor, getAuthorPosts } = require('../../controllers/authors.controllers');
const { checkAuthorId } = require('../../helpers/middleware');


router.get('/', getAllAuthors);
router.get('/:author_id', checkAuthorId, getAuthorById);
router.get('/:author_id/posts',checkAuthorId, getAuthorPosts);
router.post('/', createAuthor);
router.put('/:author_id', checkAuthorId, updateAuthor);

module.exports = router;