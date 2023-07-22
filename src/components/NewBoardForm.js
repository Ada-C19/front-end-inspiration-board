import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css';

const NewBoardForm = ( {addBoard} ) => {
    const defaultNewBoard = {
        title: '',
        owner: ''
    };

    const [formFields, setFormFields] = useState(defaultNewBoard);

    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        });
    };

    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
        });
    };

    const onFormSubmit = event => {
        event.preventDefault();
        let isEmptyFormField = (formFields.owner.length === 0 || formFields.title.length === 0);
        if (isEmptyFormField) {
            window.alert("New Boards must include a Title and Owner.");
            return;
        }
        addBoard(formFields);
        setFormFields(defaultNewBoard)
    }
    
    return (
        <form className="new-board-form" onSubmit={onFormSubmit}>
        <div>
            <h3>CREATE A NEW BOARD</h3>
            <label htmlFor="title">Title:</label>
            <input id="title" onChange={onTitleChange} value={formFields.title} />
        </div>
        <div>
            <label htmlFor="owner">Owner:</label>
            <input id="owner" onChange={onOwnerChange} value={formFields.owner} />
        </div>
        <input type="submit" value="Add Board" />
        </form>
    );
};

NewBoardForm.propTypes = {
    addBoard: PropTypes.func.isRequired
}

export default NewBoardForm;