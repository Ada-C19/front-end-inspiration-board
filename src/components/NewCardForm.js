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
    if (newCard.message.length > 40) {
      alert('Message too long')
    } else {
      addCard(
        {
          message: newCard.message,
          likesCount: newCard.likesCount
        })
    };

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
    <section>
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
    </section>
  )
}

export default NewCardForm