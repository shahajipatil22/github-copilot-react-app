import React, { useState } from 'react';
import './AddBook.css';

function AddBook() {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    price:'',
    publisher:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    
    try {
      // Here you would typically send the book data to the server via an API call.
      const response = await fetch('http://localhost:3005/books/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        console.log('Book added successfully');
        // Optionally, reset the form or redirect the user after a successful addition
        setBook({ title: '', author: '', description: '' });
        history.push('/');
      } else {
        console.error('Failed to add the book');
      }
    } catch (error) {
      console.error('There was an error adding the book', error);
    }
  };

  return (
    <div className="add-book">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            symbol="Rs"
            value={book.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">publisher</label>
          <input
            type="text"
            id="publisher"
            name="publisher"
            value={book.publisher}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={book.description}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
