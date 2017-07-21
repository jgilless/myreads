import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Library from './components/library';
import Search from './components/search';

class BooksApp extends React.Component {
  state = {
    books: [
      {
        id: 'ASDF1',
        progress: 'currentlyReading',
        authors: 'Harper Lee',
        title: 'To Kill a Mockingbird',
        coverURL: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'

      },
      {
        id: 'ASDF2',
        progress: 'currentlyReading',
        authors: 'Orson Scott Card',
        title: 'Ender\'s Game',
        coverURL: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
      },
      {
        id: 'ASDF3',
        progress: 'wantToRead',
        authors: 'David McCullough',
        title: '1776',
        coverURL: 'http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api'
      },
      {
        id: 'ASDF4',
        progress: 'wantToRead',
        authors: 'J.K. Rowling',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        coverURL: 'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'
      },
      {
        id: 'ASDF5',
        progress: 'read',
        authors: 'J.R.R. Tolkien',
        title: 'The Hobbit',
        coverURL: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'
      },
      {
        id: 'ASDF6',
        progress: 'read',
        authors: 'Seuss',
        title: 'Oh, the Places You\'ll Go!',
        coverURL: 'http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api'
      },
      {
        id: 'ASDF7',
        progress: 'read',
        authors: 'Mark Twain',
        title: 'The Adventures of Tom Sawyer',
        coverURL: 'http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api'
      }

    ]
  }

  addBook = ({ id, progress, authors, title, coverURL }) => {
    console.log(id, progress, authors, title, coverURL);
    this.setState({
      books: this.state.books.concat({
        id,
        progress,
        authors,
        title,
        coverURL
      })
    });
    console.log(this.state.books);
  };

  /**
   * Changes a books state or Adds it to the Library in a state
   * @param {string} id
   * @param {string} progress
   */
  changeBookProgress = (book, updatedProgress) => {
    const { books } = this.state;
    let bookIndex = books.findIndex((key) => {
      return key.id === book.id;
    });
    if (bookIndex === -1) {
      const newBook = Object.assign({}, book);
      newBook.progress = updatedProgress;
      this.addBook(newBook);
      return;
    }

    const stateBooks = Object.assign([], books);
    stateBooks[bookIndex] = Object.assign({}, stateBooks[bookIndex]);
    stateBooks[bookIndex].progress = updatedProgress;

    this.setState({ books: stateBooks });
  };

  removeBook = (book) => {
    this.setState((state) => ({
      books: state.books.filter((b) => b.id !== book.id)
    }));
  };

  render () {
    const { books } = this.state;

    return (
      <div className="app">
        <Route path="/search" render={ () => (
          <Search
            libraryBooks={ books }
            onChangeBookProgress={ this.changeBookProgress }
          />
        ) } />
        <Route exact path="/" render={ () => (
          <Library
            books={ books }
            onChangeBookProgress={ this.changeBookProgress }
          />
        ) } />
      </div>
    );
  }
}

export default BooksApp;

