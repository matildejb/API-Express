const Post = require('../models/post.model');

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await Post.selectAll();
        res.json(result)
    } catch (error) {
        next(error);
    }
    
}

const getPostById = async (req, res, next) => {
    try {
         const [result] = await Post.selectById(req.params.post_id);
    if (result.length === 0) {
        return res.status(404).json({ error: 'Post not find' });  
    }
    res.json(result[0]);
        
    } catch (err) {
        next(err)
    } 
}

const createPost = async (req, res, next) => {
try {
    const [result] = await Post.insertPost(req.body);
    const [[newPost]] = await Post.selectById(result.insertId);
    res.json(newPost);
} catch (err) {

    next(err);
}   
    
}

const updatePost = async (req, res, next) => {
    // req.body: { name, email, image }
    // req.params: { author_id }
  try {
    const { post_id } = req.params;

    const [result] = await Post.updateById(post_id, req.body);
      const [[editPost]] = await Post.selectById(post_id);
      res.json(editPost);
  } catch (error) {
        next(error);
}
     
}

  

module.exports = {
   getAllPosts, getPostById, createPost, updatePost
}

