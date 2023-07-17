import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = ( {addCard} ) => {
    const defaultNewCard = {
        message: '',
        board:'',
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
        addCard(formFields);
        setFormFields(defaultNewCard);
    }
    
    return (
        <form className='new-card-form' onSubmit={onFormSubmit}>
            <div>
                <h3>ADD A CARD TO CURRENT BOARD</h3>
                <label htmlFor="message">Message:</label>
                <input 
                    id="message" 
                    onChange={onMessageChange}
                    value={formFields.message}
                />
            </div>
            <div>
                <label htmlFor="board">Board:</label>
                <input 
                    id="board" 
                    onChange={onBoardChange}
                    value={formFields.board}
                />
            </div>
            <input
                type="submit"
                value="Add Card" 
            />
        </form>
        );
}

NewCardForm.propTypes = {
    addCard: PropTypes.func.isRequired
}

export default NewCardForm;