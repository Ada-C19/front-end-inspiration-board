import React, { useState } from 'react';

const NewCardForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    onSubmit(message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Message:
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewCardForm;