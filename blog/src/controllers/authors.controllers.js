const Author = require('../models/author.model');

const getAllAuthors = async (req, res, next) => {
    try {
        const [result] = await Author.selectAll();
        res.json(result)
    } catch (error) {
        next(error);
    }
    
}

const getAuthorById = async (req, res, next) => {
    try {
         const [result] = await Author.selectById(req.params.author_id);
    if (result.length === 0) {
        return res.status(404).json({ error: 'Author not find' });  
    }
    res.json(result[0]);
        
    } catch (err) {
        next(err)
    } 
}

const createAuthor = async (req, res, next) => {
try {
    const [result] = await Author.insertAuthor(req.body);
    const [[newAuthor]] = await Author.selectById(result.insertId);
    res.json(newAuthor);
} catch (err) {
    next(err);
}   
    
}

const updateAuthor = async (req, res, next) => {
    // req.body: { name, email, image }
    // req.params: { author_id }
  try {
    const { author_id } = req.params;

    const [result] = await Author.updateById(author_id, req.body);
      const [[editAuthor]] = await Author.selectById(author_id);
      res.json(editAuthor);
  } catch (error) {
        next(error);
}
     
}
  
const getAuthorPosts = async (req, res, next) => {
     try {
        const authorId = req.params.author_id;
        // Obtener todos los posts del autor correspondiente
        const postsByAuthor = await Author.getPostsByAuthorId(authorId);

        // Verificar si el autor existe
        if (postsByAuthor.length === 0) {
            return res.status(404).json({ error: 'Author not found' });
        }

        // Devolver todos los posts del autor
        res.json(postsByAuthor[0]);
    } catch (err) {
        next(err);
    }  
   

}



module.exports = {
    getAllAuthors, getAuthorById, createAuthor, updateAuthor, getAuthorPosts
}