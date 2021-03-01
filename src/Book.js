import React, { Component } from 'react';
import SelectionButton from './SelectionButton';

//Magic Numbers are bad, put them in variables
const imageWidth = 128;
const imageHeight = 193;

class Book extends Component {
  render(){
    const { title, author, imageUrl } = this.props
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: imageWidth, height: imageHeight, backgroundImage: `url(${imageUrl})` }}></div>
            <SelectionButton />
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
        </div>
      </li>
    )
  }
}

export default Book;
