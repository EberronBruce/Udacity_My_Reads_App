import React, { Component } from 'react';
import './App.css';
import BookShelves from './BookShelves';
import { stringBookStatus } from './utils/Helpers';
import { Route } from 'react-router-dom';
import AddButton from './AddButton';
import SearchBooks from './SearchBooks';


class BooksApp extends Component {
  render(){
    return(
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
            <BookShelves shelfTitles={[stringBookStatus.CURRENTLY_READING, stringBookStatus.WANT_TO_READ, stringBookStatus.READ]}/>
            <AddButton />
          </div>
        )} />
        <Route path='/search' render={() => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp;
