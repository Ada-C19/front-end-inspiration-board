import React, { useState } from 'react';
import './BoardForm.css';
import PropTypes from 'prop-types';

const BoardForm = ({ addBoardCallback }) => {
    const [formFields, setFormFields] = useState({
        title: '',
        owner: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        addBoardCallback(formFields);

        setFormFields({
            title: '',
            owner: ''
        });
    };

    const onTitleChange = (event) => {
        setFormFields({
            ...formFields,
            title: event.target.value
        })
    };

    const onOwnerChange = (event) => {
        setFormFields({
            ...formFields,
            owner: event.target.value
        })
    };

    return (
        <form onSubmit={handleSubmit} className='new_board_form'>
            <div>
                <label htmlFor="boardTitle">Title:</label>
                <input
                    name="boardTitle"
                    value={formFields.title}
                    onChange={onTitleChange} />
            </div>
            <div>
                <label htmlFor="boardOwner">Owner:</label>
                <input name="boardOwner"
                    value={formFields.owner}
                    onChange={onOwnerChange} />
            </div>
            <input
                type="submit"
                value="Create New Board" />
        </form>
    );
};

BoardForm.propTypes = {
    addBoardCallback: PropTypes.func.isRequired
};

export default BoardForm;
