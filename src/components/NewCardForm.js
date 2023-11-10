import React, { useState } from 'react';
import FormFieldError from './FormFieldError';
import './NewCardForm.css';

const NewCardForm = (props) => {
    const cardDefaultState = {
        message: "",
      };
    
    const [formData, setFormData] = useState(cardDefaultState);

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
    
        const newFormData = {...formData, [fieldName]: fieldValue};
        setFormData(newFormData);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCard = {
          message: formData.message, 
          likes_count: 0,
        }
        props.onHandleCardSubmit(newCard);
        setFormData(cardDefaultState);
      };

    return (
      <section className="form">
        <form onSubmit={handleSubmit}>
          <h2>New Card Form</h2>
          <div className="message-input-container">
            <input 
            type="text" 
            id="message" 
            name="message" 
            onChange={handleChange} 
            value={formData.message}
            placeholder='Card Message'
            />
            <FormFieldError 
            message={props.error?.cardMessage}
            />
          </div>
          <div className='card-submit'>
            <input 
              type="submit" 
              value="Add Card"
              className="card-form-button"
            />
          </div>
        </form>
      </section>
      );
};

export default NewCardForm;