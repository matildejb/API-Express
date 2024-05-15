SELECT 
    posts.*,
    authors.name AS author_name,
    authors.email AS author_email,
    authors.image AS author_image
FROM 
    posts
INNER JOIN 
    authors ON posts.authors_id = authors.id;