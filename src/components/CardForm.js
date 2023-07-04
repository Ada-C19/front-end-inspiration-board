import React, { useState } from "react";
import './CardForm.css';
import PropTypes from 'prop-types';

const CardForm = ({ addCardCallback }) => {
    const [formFields, setFormFields] = useState({
        message: "",
        likes_count: 0,
    }); 

    const onCardChange = (event) => {
        setFormFields({
        ...formFields,
        message: event.target.value,
        });
    }; 

    const handleSubmit = (event) => {
        event.preventDefault();

        addCardCallback(formFields);

        setFormFields({ 
            message: '',
            likes_count: 0,
        });
    };

  return (
    <form onSubmit={handleSubmit} className="card-form">
      <label htmlFor="cardMessage">Message:</label>
      <input
        name="cardMessage"
        value={formFields.message}
        onChange={onCardChange}
      />
      <p className="warning-message">Message must be less than 40 characters</p>
      <input className="card-submit-button" type="submit" value="Create New Card" />      
    </form>
  );
};

CardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired,
};

export default CardForm;
  