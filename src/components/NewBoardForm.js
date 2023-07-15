import React, { useState } from 'react';
import axios from 'axios';
import NewBoardPreview from './NewBoardPreview';

const NewBoardForm = ({ onAddBoard }) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: '',
      });

  const onFieldChange = (event) => {
    setFormFields({
      ...formFields,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/boards', formFields)
      .then(response => {
        const createdBoard = response.data;
        onAddBoard(createdBoard);
        setFormFields({
          title: '',
          owner: '',
        });
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
            name="title"
            value={formFields.title}
            onChange={onFieldChange}
            required
          />
        </div>
        <div>
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formFields.owner}
            onChange={onFieldChange}
            required
          />
        </div>
        <button type="submit" value="Add Board" disabled={!formFields.title || !formFields.owner}>
          Create a New Board
        </button>
      </form>
        <NewBoardPreview title={formFields.title} owner={formFields.owner} />
    </div>
  );
};

export default NewBoardForm;
