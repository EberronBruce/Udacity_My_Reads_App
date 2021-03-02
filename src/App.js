import React, { Component } from 'react';
import './App.css';
import BookShelves from './BookShelves';
import { stringBookStatus } from './utils/Helpers';


class BooksApp extends Component {
  render(){
    return(
      <div className="App">
        <BookShelves shelfTitles={[stringBookStatus.CURRENTLY_READING, stringBookStatus.WANT_TO_READ, stringBookStatus.READ]}/>
        <div className="open-search">
          <button >Add a book</button>
        </div>
      </div>
    )
  }
}

export default BooksApp;
