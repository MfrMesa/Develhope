-- Imagine you're designing a database to manage a bookstore. Create a table named "Books" with attributes for book_id, 
-- title, author, genre, published_year, isbn, price, rating, and stock_count.


-- You want to add more details about each book. Modify the "Books" table to include columns for the publisher and the number of pages.


-- TABLE
CREATE TABLE books (
    book_id INT NOT NULL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50) NOT NULL,
    genre VARCHAR(20) NOT NULL,
    published_year YEAR,
    isbn VARCHAR(20) NOT NULL,
    price DECIMAL(10, 2),
    rating DECIMAL(3, 2),
    stock_count INT NOT NULL
, publisher VARCHAR(50), number_of_pages NOT NULL);

 
-- INDEX
 
-- TRIGGER
 
-- VIEW
 