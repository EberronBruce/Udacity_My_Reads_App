import React, { Component } from 'react';
import { bookStatus } from './utils/Helpers';



class SelectionButton extends Component {

  handleChange = (event) => {
    event.preventDefault();
    //console.log(event.target.value)
    this.props.handler(event, this.props.bookID)
  }

  render(){
    return(
      <div className="book-shelf-changer">
        <select onChange={this.handleChange} value={this.props.shelf}>
          <option value="move" disabled>Move to...</option>
          <option value={bookStatus.CURRENTLY_READING}>Currently Reading</option>
          <option value={bookStatus.WANT_TO_READ}>Want to Read</option>
          <option value={bookStatus.READ}>Read</option>
          <option value={bookStatus.NONE}>None</option>
        </select>
      </div>
    )
  }
};

export default SelectionButton;
