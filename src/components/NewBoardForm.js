import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

    setNewBoards({
      title: '',
      owner: ''
    });
  };

  const handleChange = event => setNewBoards(
    {
      ...newBoard, [event.target.name]: event.target.value
    }
  );
  

  return (
    <section className='board-form-sect'>
      <form className='form' onSubmit={handleSubmit}>
        <label className='board-title'>Board Title:
          <input
            className='board-input' 
            value={newBoard.title}
            name = 'title'
            onChange={handleChange}
            type='text' 
          />
        </label>
        <label className='owner-name'>Owner's Name:
          <input
            className='board-input'
            value={newBoard.owner}
            type='text'
            name = 'owner'
            onChange={handleChange}
          />
        </label>
        <input className='btn' type='submit' value='Submit' />
        <span>Preview:</span>
        <span>{newBoard.title}-{newBoard.owner}</span>
      </form>
    </section>
  );
};

NewBoardForm.propTypes = {
  addBoard: PropTypes.func.isRequired
};

export default NewBoardForm;