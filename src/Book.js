import React, { Component } from 'react';
import SelectionButton from './SelectionButton';
import PropTypes from 'prop-types';

//Magic Numbers are bad, put them in variables
const imageWidth = 128;
const imageHeight = 193;

class Book extends Component {
  render(){
    const { title, author, imageUrl, bookID, shelf, handler } = this.props;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: imageWidth, height: imageHeight, backgroundImage: `url(${imageUrl})` }}></div>
            <SelectionButton handler={handler} bookID={bookID} shelf={shelf}/>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.array.isRequired,
  imageUrl: PropTypes.string.isRequired,
  bookID: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired
};

export default Book;
