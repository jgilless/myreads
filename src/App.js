import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Library from './components/library';
import Search from './components/search';

import * as BooksAPI from './utils/BooksAPI';

class BooksApp extends React.Component {
  constructor () {
    super();
    this.state = BooksAPI.getAll().then((books) => {
      this.setState({ books: books });
    });
  }

  /**
   * Change a books shelf or Adds it to the Library in a shelf
   * @param {string} id
   * @param {string} shelf
   */
  updateBookShelf = (book, updatedShelf) => {
    const { books } = this.state;

    const bookIndex = books.findIndex((key) => {
      return key.id === book.id;
    });

    let stateBooks = Object.assign([], books);

    if (bookIndex === -1) {
      const newBook = Object.assign({}, book);
      newBook.shelf = updatedShelf;
      stateBooks.push(newBook);
    } else {
      stateBooks[bookIndex] = Object.assign({}, stateBooks[bookIndex]);
      stateBooks[bookIndex].shelf = updatedShelf;
    }

    BooksAPI.update(book, updatedShelf).then(
      this.setState({ books: stateBooks })
    );
  };

  render () {
    const { books } = this.state;

    if (!books) {
      return null;
    }

    return (
      <div className="app">
        <Route path="/search" render={ () => (
          //Search Page
          <Search
            libraryBooks={ books }
            updateBookShelf={ this.updateBookShelf }
          />
        ) } />
        <Route exact path="/" render={ () => (
          //Library Page
          <Library
            books={ books }
            updateBookShelf={ this.updateBookShelf }
          />
        ) } />
      </div>
    );
  }
}

export default BooksApp;

