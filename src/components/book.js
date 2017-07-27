import React, { Component } from 'react';

class Book extends Component {
    constructor () {
        super();
        this.state = { shelf: 'none' };
    }

    changeBookShelf (value) {
        const { onChangeBookShelf } = this.props;
        onChangeBookShelf(this.props, value);
        this.setState({ shelf: value });
    };

    componentDidMount () {
        const { shelf } = this.props;
        this.setState({ shelf });
    };

    render () {
        const { title, authors, imageLinks } = this.props;
        const { thumbnail } = imageLinks;
        const { shelf } = this.state;

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url("${ thumbnail }")` } }>
                    </div>
                    <div className="book-shelf-changer">
                        <select
                            value={ shelf }
                            onChange={ (event) => this.changeBookShelf(event.target.value) }
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
