import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import BookList from './views/BookList/BookList';
import AddBook from './views/AddBook/AddBook';
import EditBook from './views/EditBook/EditBook';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Book Management App</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/add">Add Book</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route exact path="/" component={BookList} />
            <Route path="/add" component={AddBook} />
            <Route path="/edit/:id" component={EditBook} />
          </Switch>
        </main>

        <footer className="App-footer">
          <p>Book Management &copy; 2023</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
