import React, { Component } from 'react';



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
          <option value="currenlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
};

export default SelectionButton;
