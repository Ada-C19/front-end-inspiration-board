import React, { useState } from 'react';

const NewCardForm = ({ onSubmit }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(message);
    setMessage('');
  };

  const resetForm = () => {
    setMessage('');
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
      <input type="button" value="Reset Form" onClick={resetForm} />
    </form>
  );
};

export default NewCardForm;