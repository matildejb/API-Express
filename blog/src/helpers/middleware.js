
const Author = require('../models/author.model');
const Post = require('../models/post.model');

//Middleware para comprobar id dinámicos
const checkAuthorId = async (req, res, next) => {
    const { author_id } = req.params; 

    const [result] = await Author.selectById(author_id);
    
    if (result.length === 0) {
        return res.status(404).json({ error: 'Author ID is incorrect' });
    }

    next();

}
const checkPostId = async (req, res, next) => {
    const { post_id } = req.params; 

    const [result] = await Post.selectById(post_id);
    
    if (result.length === 0) {
        return res.status(404).json({ error: 'Post ID is incorrect' });
    }

    next();

}

module.exports = {
     checkAuthorId, checkPostId
}