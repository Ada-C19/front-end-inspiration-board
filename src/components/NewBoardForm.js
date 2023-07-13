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

    console.log('submit')

    if (newBoard.title === '' || newBoard.owner === '') {
      alert('Must enter information into both fields.');
    } else {
      addBoard({
        title: newBoard.title,
        owner: newBoard.owner
      });
    }

    setNewBoards({
      title: '',
      owner: ''
    });
  };

  const handleChange = event => {
    console.log('event:', event)
    console.log('value:', event.target.value)
    setNewBoards({
    ...newBoard, [event.target.name]: event.target.value
  })
    console.log('value2:', event.target.value)
    console.log('newBoard:', newBoard)
  }
  

  return (
    <section className='board-form-sect'>
      <form className='new-board-form' onSubmit={handleSubmit}>
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
        <input className='board-submit' type='submit' value='Submit' />
        <p>Preview:</p>
        <p>{newBoard.title}-{newBoard.owner}</p>
      </form>
    </section>
  )
}

export default NewBoardForm;