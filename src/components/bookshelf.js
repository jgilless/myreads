import React, { Component } from 'react';

import Book from './book';

class Bookshelf extends Component {
    render () {
        const { name, books } = this.props;

        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{ name }</h2>
                <div className="bookshelf-books">
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

export default Bookshelf;
