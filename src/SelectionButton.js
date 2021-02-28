import React, { Component } from 'react';


const SelectionButton = () => {
  return (
    <div className="book-shelf-changer">
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currenlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  )
};

export default SelectionButton;
