import React, { useState } from "react";
import "./NewCardForm.css";

const NewCardForm = ({ onCardFormSubmit }) => {
  const [newCardMessage, setNewCardMessage] = useState("");

  const handleNewCardMessage = (event) => {
    setNewCardMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCard = {
      message: newCardMessage,
    };

    onCardFormSubmit(newCard);
    setNewCardMessage("");
  };

  return (
    <form className="new-card-form" onSubmit={handleSubmit}>
      <h2>Add New Card</h2>
      <div>
        <input
          className="new-card-form-input"
          type="text"
          id="newCardMessage"
          name="newCardMessage"
          onChange={handleNewCardMessage}
          value={newCardMessage}
          placeholder="Enter new message..."
        />
      </div>
      {newCardMessage === "" && (
        <div className="warning"> Please fill out all fields.</div>
      )}
      {newCardMessage.length >= 40 && (
        <div className="warning"> Max 40 characters please.</div>
      )}
      <div>
        <input
          className="new-card-form-btn"
          type="submit"
          value="add card"
          disabled={newCardMessage === "" || newCardMessage.length >= 40}
        />
      </div>
    </form>
  );
};

export default NewCardForm;
