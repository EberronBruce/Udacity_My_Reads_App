import React, { Component } from 'react';
import * as BooksAPI from './utils/BooksAPI';
import { Link } from 'react-router-dom';
import Book from './Book';
import { bookStatus } from './utils/Helpers';


class SearchBooks extends Component {
  state = {
    books: [],
    booksOnShelf: []
  }

  componentDidMount() {
    this.getBooksOnShelf();
  };

updateQuery = (query) => {
  if (query === '') {
    console.log("Query Empty")
    this.setState((prevState) => ({
      books: []
    }));
     return
   }
  this.searchBooks(query.trim())
 };

 searchBooks = (query) => {
   BooksAPI.search(query)
   .then((bookSearch) => {
     if (query !== '') {
       console.log(`Query is Not Empty: ${query}`) //Problem is here, query is not empty when it should.
       this.setState((prevState) => {
         if('error' in bookSearch) {
           prevState.books = [];
         } else {
           prevState.books = bookSearch
         }
         return prevState;
       });
     } else {
       this.setState((prevState) => ({
         books: []
       }));
     }
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
       book.shelf = onShelf[0].shelf
     } else {
       book.shelf = bookStatus.NONE;
     }
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
  const { query } = this.state ;
  return(
    <div className="search-books">
      <header className="search-books-bar">
        <Link to="/">
          <button className="close-search">close</button>
        </Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by category" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
      </header>
      <article className="search-books-results">
        <ol className="books-grid">
          {this.state.books.map((bookFromSearch) => {
            const book = this.compareOnShelfToSearchBooks(bookFromSearch)
            return (<Book title={book.title} author={book.authors} imageUrl={book.imageLinks.thumbnail} bookID={book.id} shelf={book.shelf} handler={this.handleUpdateState} key={book.id}/>);
          })};
        </ol>
      </article>
    </div>
   )
  }
}

export default SearchBooks;
