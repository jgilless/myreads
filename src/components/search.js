import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './book';

class Search extends Component {
    state = {
        query: '',
        books: []
    };

    updateQuery = (query) => {
        this.setState({ query: query });
        const trimmedQuery = query.trim();
        if (trimmedQuery === '') {
            return;
        }
        BooksAPI.search(trimmedQuery, 10).then((response) => {
            console.log(response);
            if (response && response.length) {
                const books = response.map((book) => {
                    return {
                        id: book.id,
                        progress: 'none',
                        authors: book.authors,
                        title: book.title,
                        coverURL: book.imageLinks.thumbnail
                    };
                });
                this.setState({ books });
            }
        });
    };

    render () {
        const { books } = this.state;

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link
                to="/"
                className="close-search"
              >
              Close
              </Link>
              <div className="search-books-input-wrapper">
                <input
                    type="text"
                    placeholder="Search by title or author"
                    onChange={ (event) => this.updateQuery(event.target.value) }
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                    {
                        books.map((book) => (
                            <li key={ book.title }>
                                <Book
                                    authors={ book.authors }
                                    title={ book.title }
                                    coverURL={ book.coverURL }
                                />
                            </li>
                        ))
                    }
              </ol>
            </div>
          </div>
        );
    }
}

export default Search;
