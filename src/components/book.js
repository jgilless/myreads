import React, { Component } from 'react';

class Book extends Component {
    state = {};

    render () {
        const { title, authors, coverURL, onChangeBookProgress, progress } = this.props;

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url("${ coverURL }")` } }>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            value={ progress }
                            onChange={ (event) => onChangeBookProgress(this.props, event.target.value) }
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{ title }</div>
                <div className="book-authors">{ authors }</div>
            </div>
        );
    }
}

export default Book;
