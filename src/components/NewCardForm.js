import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = ({ addCard }) => {
  const [newCard, setNewCards] = useState(
    {
      message: ''
    }
  );

  const handleSubmit = event => {
    event.preventDefault();

    if (newCard.message.length > 40) {
      alert('Max 40 characters. Try again.');
    } else if (newCard.message === '') {
      alert('Empty entries not accepted.');
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
      <form 
        className='form'
        onSubmit={handleSubmit}
      >
        <label>Message:
          <input
            className='board-input'
            value={newCard.message}
            onChange={handleChange}
            name='message'
            type='text'
          />
        </label>
        <input
          className='btn' 
          type='submit' 
          value='Submit'
        />
      </form>
    </section>
  );
};

NewCardForm.propTypes = {
  addCard: PropTypes.func.isRequired
};

export default NewCardForm;