import React, { Component } from 'react';
import './App.css';
import BookShelves from './BookShelves'

class BooksApp extends Component {
  state = {

  }

  render(){
    return(
      <div className="App">
        <BookShelves shelfTitles={["Currently Reading", "Want to Read", "Read"]}/>
      </div>
    )
  }
}

export default BooksApp;
