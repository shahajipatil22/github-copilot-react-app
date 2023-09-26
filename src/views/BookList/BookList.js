
import React, { useState, useEffect } from 'react';
import './BookList.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.log(error));
  }, []);

  const handleEdit = (id) => {
    // handle edit logic here
    console.log('handle edit',id);
  }

  const handleDelete = (id) => {
    // handle delete logic here
    console.log('handle delete',id);
  }

  return (
    <div className="BookList">
    <table >
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Price</th>
            <th>Publisher</th>
            <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book._id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.price ? book.price.toLocaleString('en-US', { style: 'currency', currency: 'INR' }) : priceFormat}</td>
            <td>{book.publisher}</td>
            <td>{book.description}</td>
            <td>
            <button><Link to={`/edit/${book._id}`}>Edit</Link></button>
            <button onClick={() => handleDelete(book._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default BookList;
/*
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

class BookList extends Component {
  render() {
    return (
      <div className="BookList">
        <h2>Book List</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>ISBN</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Book 1</td>
              <td>Author 1</td>
              <td>ISBN 1</td>
              <td>
                <Link to={`/edit/1`}>Edit</Link>
                <Link to={`/delete/1`}>Delete</Link>
              </td>
            </tr>
            <tr>
              <td>Book 2</td>
              <td>Author 2</td>
              <td>ISBN 2</td>
              <td>
                <Link to={`/edit/2`}>Edit</Link>
                <Link to={`/delete/2`}>Delete</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default BookList;

*/
