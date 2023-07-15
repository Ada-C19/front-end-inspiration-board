import React from 'react';

const NewBoardPreview = ({ title, owner }) => {
  return (
    <div>
      <h3>Preview:</h3>
      <p>Title: {title}</p>
      <p>Owner: {owner}</p>
    </div>
  );
};

export default NewBoardPreview;
