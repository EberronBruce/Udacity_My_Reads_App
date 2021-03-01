import React, { Component } from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


class BookShelf extends Component {
  render(){
    const { shelfName, books, updateState } = this.props;
    return(
      <header className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <main className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book title={book.title} author={book.authors} imageUrl={book.imageLinks.thumbnail} bookID={book.id} shelf={book.shelf} handler={updateState} key={book.id}/>
            ))}
          </ol>
        </main>
      </header>
    )
  }
}

BookShelf.propTypes = {
  shelfName: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default BookShelf;
