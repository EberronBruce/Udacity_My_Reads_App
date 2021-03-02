import React from 'react';
import { Link } from 'react-router-dom';

const AddButton = () => {
  return(
    <Link to='/search' className="open-search">
      <button>AddButton()</button>
    </Link>
  )
}

export default AddButton;
