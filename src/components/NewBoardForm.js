import React, { useState } from 'react';
import './NewBoardForm.css';

const NewBoardForm = ({ addBoard }) => {
  const [newBoard, setNewBoards] = useState(
    {
      title: '',
      owner: ''
    }
  );

  const handleSubmit = event => {
    event.preventDefault();

    if (newBoard.title === '' || newBoard.owner === '') {
      alert('Must enter information into both fields.');
    } else {
      addBoard(newBoard);
    };
    setNewBoards(
      {
        title: '',
        owner: ''
      }
    );
  };

  const handleChange = event => {
    setNewBoards({
    ...newBoard, [event.target.name]: event.target.value
  });
  };
  
  return (
    <section className='board-form-sect'>
      <form className='new-board-form' onSubmit={handleSubmit}>
        <label className='board-title'>Board Title:
          <input
            className='board-input' 
            value={newBoard.title}
            onChange={handleChange}
            name = 'title'
            type='text' 
          />
        </label>
        <label className='owner-name'>Owner's Name:
          <input
            className='board-input'
            value={newBoard.owner}
            onChange={handleChange}
            type='text'
            name = 'owner'
          />
        </label>
        <input 
          className='board-submit' 
          type='submit' 
          value='Submit' 
        />
        <p>Preview:</p>
        <p>{newBoard.title}-{newBoard.owner}</p>
      </form>
    </section>
  );
};

export default NewBoardForm;