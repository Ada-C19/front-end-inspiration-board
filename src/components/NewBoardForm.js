import React, { useState } from 'react';
import axios from 'axios';
import NewBoardPreview from './NewBoardPreview';

const NewBoardForm = ({ onAddBoard }) => {
  const [title, setTitle] = useState('');
  const [owner, setOwner] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBoard = {
      title: title,
      owner: owner,
    };

    axios.post('http://localhost:5000/boards', newBoard)
      .then(response => {
        const createdBoard = response.data;
        onAddBoard(createdBoard);
        setTitle('');
        setOwner('');
      })
      .catch(error => {
        console.error('Error creating board:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            value={owner}
            onChange={handleOwnerChange}
            required
          />
        </div>
        <button type="submit" value="Add Board" disabled={!title || !owner}>
          Create a New Board
        </button>
      </form>
        <NewBoardPreview title={title} owner={owner} />
    </div>
  );
};

export default NewBoardForm;
