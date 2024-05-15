const selectAll = () => {
    return db.query('SELECT * FROM posts');
}

const selectById = (postId) => {
    return db.query('SELECT * FROM posts where id = ?', [postId])
}

const insertPost = ({ title, description, creation_date, category, authors_id }) => {
    return db.query('INSERT INTO posts (title, description, creation_date, category, authors_id) values (?, ?, ?, ?, ?)', [ title, description, creation_date, category, authors_id ]);

}

const updateById = (post_id, { title, description, creation_date, category, authors_id }) => {
    return db.query(
        `UPDATE posts
         SET title = ?, description = ?, creation_date = ?, category = ?, authors_id = ?
         WHERE id = ?`,
        [title, description, creation_date, category, authors_id, post_id]
    );
}





module.exports = {
    selectAll, selectById, insertPost, updateById
}