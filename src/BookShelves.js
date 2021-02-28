import React, { Component } from 'react';
import BookShelf from './BookShelf';
import PropTypes from 'prop-types';



class BookShelves extends Component {
  render(){
    return(
      <div className="list-books">
        <header className="list-books-title">
          <h1>My Reads</h1>
        </header>
        <article className="list-books-content">
          <div>
            {this.props.shelfTitles.map((title) => (
              <BookShelf shelfName={title}/>
            ))}
          </div>
        </article>
      </div>
    )
  }
}


export default BookShelves;
