import React from 'react';
import { useState } from 'react';
import './NewForm.css';

const NewBoardForm = ({createNewBoard, isSubmitDisabled}) => {

    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

    const newTitle = (changeEvent) => {
        setTitle(changeEvent.target.value);
    };

    const newOwner = (changeEvent) => {
        setOwner(changeEvent.target.value);
    };

    const submitNewBoard = (e) => {
        e.preventDefault();
        createNewBoard({ title, owner });
        setTitle('');
        setOwner('');
    };


    return (
    <form onSubmit={submitNewBoard}>
        <div className="form-row">
            <label htmlFor="title">Theme:</label>
            <input  id="title" 
                    value={title} 
                    onChange={newTitle}
                    className={isSubmitDisabled(title) ? 'invalid-form-input' : ''} />
        </div>
        <div className="form-row">
            <label htmlFor="owner">Participant:</label>
            <input  id="owner" 
                    value={owner} 
                    onChange={newOwner}
                    className={isSubmitDisabled(owner) ? 'invalid-form-input' : ''} />
        </div>
        <div>
            <p className="preview-format">Preview: "Sweet wishes for {title} ~ {owner}"</p>
        </div>
        <div className="form-row">
            <button type="submit" 
                    className="submit-button"
                    disabled={isSubmitDisabled(title) || isSubmitDisabled(owner)}>Submit</button>
        </div>
    </form>
)

};

export default NewBoardForm;

//submit button if valid entry becomes usable, 
//entry must be between 0 - 40 characters