import React, { useState, useEffect } from 'react';
import './EditBook.css';

function EditBook({ match }) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
    price:'',
    publisher:''
  });

  // Fetch the book data when the component mounts
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`http://localhost:3005/books/${match.params.id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book:', error);
      }
    };

    fetchBook();
  }, [match.params.id]);

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
      const response = await fetch(`http://localhost:3005/books/${match.params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(book)
      });

      if (response.ok) {
        console.log('Book updated successfully');
        // Here, you can redirect the user to the book list or display some notification
        history.push('/');

      } else {
        console.error('Failed to update the book');
      }
    } catch (error) {
      console.error('There was an error updating the book', error);
    }
  };

  return (
    <div className="edit-book">
      <h2>Edit Book</h2>
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

        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default EditBook;
