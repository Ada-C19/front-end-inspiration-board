import React from 'react';
import { useState } from 'react';
import './NewForm.css';

const NewCardForm = ({postNewCard, isSubmitDisabled}) => {
    const [message, setMessage] = useState('');

    const newMessage = (changeEvent) => {
        setMessage(changeEvent.target.value)
    };

    const submitNewCard = (e) => {
        e.preventDefault();
        postNewCard(message);
        setMessage('');
    };

    //we need to write the postNewCard function.... in cardlist?

    return (
        <div className="new-card-form">
            <h2>Make a Wish</h2>
            <form onSubmit={submitNewCard}>
            <label>Wish:</label>
            <input  id="message" 
                    value={message} 
                    onChange={newMessage}
                    className={isSubmitDisabled(message) ? 'invalid-form-input' : ''} />
            <div>
                <p>Preview: "{message}"</p>
            </div>
            <div>
            <input  className='submit-button' 
                    type="submit"
                    disabled={isSubmitDisabled(message)}></input>
            </div>
            </form>
        </div>
    );
};


export default NewCardForm;

