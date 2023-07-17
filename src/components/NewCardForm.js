import React, { useState } from 'react';

const NewCardForm = ({ addCard }) => {
  const [newCard, setNewCards] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (newCard.message.length > 40) {
      alert('Max 40 characters. Try again.');
    } else {
      addCard(newCard.message);
    };

    setNewCards(
      {
        message: '',
      }
    );
  };

  const handleChange = event => {
    setNewCards(
      {
        ...newCard, [event.target.name]: event.target.value
      }
    );
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>Message:
          <input
            value={newCard.message}
            onChange={handleChange}
            name='message'
            type='text'
          />
        </label>
        <input 
          type='submit' 
          value='Submit'
        />
      </form>
    </section>
  );
};

export default NewCardForm;