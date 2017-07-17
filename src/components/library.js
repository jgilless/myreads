import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Bookshelf from './bookshelf';

class Library extends Component {

    _filterBooks = (progress) => {
        const { books } = this.props;
        return books.filter((book) => book.progress === progress);
    }

    render () {
        const { onChangeBookProgress } = this.props;

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf
                  name="Currently Reading"
                  books={ this._filterBooks('currentlyReading') }
                  onChangeBookProgress={ onChangeBookProgress }
                />
                <Bookshelf
                  name="Want to Read"
                  books={ this._filterBooks('wantToRead') }
                  onChangeBookProgress={ onChangeBookProgress }
                />
                <Bookshelf
                  name="Read"
                  books={ this._filterBooks('read') }
                  onChangeBookProgress={ onChangeBookProgress }
                />
              </div>
            </div>
            <div className="open-search">
              <Link
                    to="/search"
                >
                    Add a book
              </Link>
            </div>
          </div>
        );
    }
}

export default Library;
