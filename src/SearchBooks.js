import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';
import { bookStatus } from './utils/Helpers';
import { debounce } from 'throttle-debounce';

class SearchBooks extends Component {
  state = {
    books: [],
    booksOnShelf: [],
    query: ''
  }

  componentDidMount() {
    this.getBooksOnShelf();
  };

updateQuery = (query) => {
  this.setState((prevState) => {
    prevState.query = query.trim();
    this.searchBooks();
    return prevState;
  })
 };

 clearBooks = () => {
   this.setState((prevState) => ({
     books: []
   }));
 }

 searchBooks = () => {
   const { query } = this.state;
   if(query.length === 0) {
     this.clearBooks();
     return;
   }
   BooksAPI.search(query)
   .then((bookSearch) => {
     this.setState((prevState) => {
       if('error' in bookSearch) {
         prevState.books = [];
       } else {
         prevState.books = bookSearch;
       }
       return prevState;
     });
   });
 }

 getBooksOnShelf = () => {
   BooksAPI.getAll()
   .then((booksOnShelf) => {
     this.setState(() => ({
       booksOnShelf
     }));
   });
 };

 compareOnShelfToSearchBooks = (book) => {
   if(book.shelf === '' || book.shelf === undefined ) {
     const onShelf = this.state.booksOnShelf.filter((bookOnShelf) => bookOnShelf.id === book.id)
     if(onShelf[0] !== undefined) {
       book.shelf = onShelf[0].shelf;
     } else {
       book.shelf = bookStatus.NONE;
     }
   }
   return book;
 }

 checkBookForThumbnail = (book) => {
   if(book.imageLinks === undefined) {
     book.imageLinks = {thumbnail : "http://books.google.com/books/content?id=1yx1tgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"};
   }
   return book;
 }

 handleUpdateState = (event, bookID) => {
  const index = this.state.books.findIndex((book) => book.id === bookID);
  let book = this.state.books[index];
  BooksAPI.update(book, event.target.value).then((dictIDs) => {
    this.setState((prevState) => {
      prevState.books[index].shelf = event.target.value;
      return prevState;
    });
  })
 }


render() {
  const { query } = this.state.query;
  return(
    <div className="search-books">
      <header className="search-books-bar">
        <Link to="/">
          <button className="close-search">close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by category" value={query} ref={(input) => { this.textInput = input; }}  onChange={debounce(500, (event) => this.updateQuery(event.target.value))}/>
        </div>
      </header>
      <article className="search-books-results">
        <ol className="books-grid">
          {this.state.books.map((bookFromSearch) => {
            let book = this.compareOnShelfToSearchBooks(bookFromSearch);
            book = this.checkBookForThumbnail(book);
            return (<Book title={book.title} author={book.authors} imageUrl={book.imageLinks.thumbnail} bookID={book.id} shelf={book.shelf} handler={this.handleUpdateState} key={book.id}/>);
          })}
        </ol>
      </article>
    </div>
   )
  }
}

export default SearchBooks;
