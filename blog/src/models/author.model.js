const selectAll = () => {
    return db.query('SELECT * FROM authors');
}

const selectById = (authorId) => {
    return db.query('SELECT * FROM authors where id = ?', [authorId])
}

const insertAuthor = ({ name, email, image }) => {
    return db.query('INSERT INTO authors (name, email, image ) values (?, ?, ?)', [name, email, image ]);

}

const updateById = (author_id, { name, email, image }) => {
    return db.query(
        `UPDATE authors
         SET name = ?, email = ?, image = ?
         WHERE id = ?`,
        [name, email, image, author_id]
    );
}

const getPostsByAuthorId = (authorId) => {
    return db.query(
        `SELECT
        posts.*,
        authors.name AS author_name,
        authors.email AS author_email
     FROM 
       posts
     INNER JOIN 
       authors ON posts.authors_id = authors.id
     WHERE
       authors.id = ?`,
        [authorId]
    );
}


module.exports = {
    selectAll, selectById, insertAuthor, updateById, getPostsByAuthorId
}