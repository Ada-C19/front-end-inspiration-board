import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

// pass in function addCard
// call addCard() in onFormSubmit

const NewCardForm = () => {
    const defaultNewCard = {
        message: '',
        board:''
    }

    const [formFields, setFormFields] = useState(defaultNewCard);

    const onMessageChange = (event) => {
        setFormFields({
            ...formFields,
            message: event.target.value
        });
    };

    const onBoardChange = (event) => {
        setFormFields({
            ...formFields,
            board: event.target.value
        });
    };

    const onFormSubmit = event => {
        event.preventDefault();

        console.log(formFields);

        setFormFields(defaultNewCard);
    }
    
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label htmlFor="message">Message:</label>
                <input 
                    name="message" 
                    onChange={onMessageChange}
                    value={formFields.message}
                />
            </div>
            <div>
                <label htmlFor="board">Board:</label>
                <input 
                    name="board" 
                    onChange={onBoardChange}
                    value={formFields.board}
                />
            </div>
            <input
                type="submit"
                value="Add Task" 
            />
        </form>
        );
}

export default NewCardForm

