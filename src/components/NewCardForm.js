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
            messages: event.target.value
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        addCardCallback({
            messageData: formFields.message
        })

        setFormFields({
            message: '',
        })
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="card-form-input"></div>
            {/* <label htmlFor="cardMessage">Card Message:</label> */}
            <input
                name="cardMessage"
                value={formFields.message}
                onChange={onMessageChange}
                className="input-form"
                placeholder="Card Message"
            />
            <div className="add-card">
                <button type="submit">
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