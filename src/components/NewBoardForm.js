import React, { useState } from 'react';

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
    setNewBoards({
    ...newBoard, [event.target.name]: event.target.value
  })

    console.log('newBoard:', newBoard)
  }
  

  return (
    <form onSubmit={handleSubmit}>
      <label>Board Title:
        <input 
          value={newBoard.title}
          name = 'title'
          onChange={handleChange}
          type='text' 
        />
      </label>
      <label>Owner's Name:
        <input
          value={newBoard.owner}
          type='text'
          name = 'owner'
          onChange={handleChange}
        />
      </label>
      <input type='submit' value='Submit' />
    </form>
  )
}

export default NewBoardForm;