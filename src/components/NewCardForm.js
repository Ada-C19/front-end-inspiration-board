import React, { useState } from 'react';

const NewCardForm = ({ addCard }) => {
  const [newCard, setNewCards] = useState(
    {
      message: '',
      likesCount: 0
    }
  );

  const handleSubmit = event => {
    event.preventDefault()

    console.log('submit')

    addCard(
      {
        message: newCard.message,
        likesCount: newCard.likesCount
      }
    );

    setNewCards(
      {
        message: '',
        likesCount: 0
      }
    );
  };

  const handleChange = event => {
    setNewCards(
      {
        ...newCard, [event.target.name]: event.target.value
      }
    );
    console.log('newCard:', newCard)
  };




  return (
    <form onSubmit={handleSubmit}>
      <label>Card Message:
        <input
          value={newCard.message}
          name='message'
          onChange={handleChange}
          type='text'
        />
      </label>
      <input type='submit' value='Submit'/>
    </form>
  )
}

export default NewCardForm