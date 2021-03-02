import React, { Component } from 'react';
import { bookStatus } from './utils/Helpers';
import PropTypes from 'prop-types';


class SelectionButton extends Component {
  static propTypes = {
    shelf: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired
  };

  handleChange = (event) => {
    event.preventDefault();
    this.props.handler(event, this.props.bookID);
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
