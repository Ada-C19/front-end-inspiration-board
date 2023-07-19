import React from 'react';
import { useState } from 'react';
import './NewBoardForm.css';

const NewBoardForm = ({createNewBoard}) => {

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
        <label htmlFor="title">Title:</label>
        <input id="title" value={title} onChange={newTitle} />
        </div>
        <div className="form-row">
        <label htmlFor="owner">Participant:</label>
        <input id="owner" value={owner} onChange={newOwner} />
        </div>
        <div className="form-row">
        <button type="submit" className="submit-button">Submit</button>
        </div>
    </form>
)

};

export default NewBoardForm;

//submit button if valid entry becomes usable, 
//entry must be between 0 - 40 characters