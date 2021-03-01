import React, { Component } from 'react';
import BookShelf from './BookShelf';
import * as BooksAPI from './utils/BooksAPI';
import { bookStatus, stringBookStatus } from './utils/Helpers';


class BookShelves extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }));
    });
  };

 curReadBooks = (books) => {
   return(books.filter((book) => book.shelf === bookStatus.CURRENTLY_READING))
 };

 wantToReadBooks = (books) => {
   return(books.filter((book) => book.shelf === bookStatus.WANT_TO_READ))
 }

 readBooks = (books) => {
   return(books.filter((book) => book.shelf === bookStatus.READ))
 }

 handleUpdateState = (event, bookID) => {
   console.log("Testing This")
   console.log(bookID)
   console.log(event.target.value)
 }

 renderBookShelf = (title) => {
   switch(title) {
     case stringBookStatus.CURRENTLY_READING:
      return <BookShelf shelfName={title} books={this.curReadBooks(this.state.books)} updateState={this.handleUpdateState} key={bookStatus.CURRENTLY_READING}/>;
     case stringBookStatus.WANT_TO_READ:
      return <BookShelf shelfName={title} books={this.wantToReadBooks(this.state.books)} updateState={this.handleUpdateState} key={bookStatus.WANT_TO_READ}/>;
     case stringBookStatus.READ:
      return <BookShelf shelfName={title} books={this.readBooks(this.state.books)} updateState={this.handleUpdateState} key={bookStatus.READ}/>;
    default:
      return <BookShelf shelfName={title} books={null} key={bookStatus.NONE}/>;
   }
 }

  render(){
    return(
      <div className="list-books">
        <header className="list-books-title">
          <h1>My Reads</h1>
        </header>
        <article className="list-books-content">
          <div>
            {this.props.shelfTitles.map((title) => (
              this.renderBookShelf(title)
            ))}
          </div>
        </article>
      </div>
    )
  }
}


export default BookShelves;
