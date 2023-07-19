import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewCardForm.css';

const NewCardForm = ({ addCardCallback }) => {
    const [formFields, setFormFields] = useState({
        message: '',
    });

    const onMessageChange = (event) => {
        setFormFields({
            ...formFields,
            message: event.target.value
        })
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        addCardCallback({
            messageData: formFields.message,
        })

        setFormFields({
            message: '',
        })
    }

    return (
        <form id='add-card' onSubmit={onFormSubmit}>

            <div className="card-form-input">
                {/* <label htmlFor="cardMessage">Card Message:</label> */}
                <input
                    name="message"
                    value={formFields.message}
                    onChange={onMessageChange}
                    className="input-form"
                    placeholder='Card Message'
                />
            </div>

            <div className="add-card">
                <button type="submit" form="add-card">
                    +
                </button>
            </div>
            
        </form>
    )
}

NewCardForm.propTypes = {
    addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm