import React, { useState } from 'react';

import PropTypes from 'prop-types';

const NewBoardForm = (props) => {
    const boardDefaultState = {
        title: "",
        owner: "",
    };
    
    const [boardFormData, setBoardFormData] = useState(boardDefaultState);
    
    
    const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    
    const newFormData = {...boardFormData, [fieldName]: fieldValue};
    setBoardFormData(newFormData);
    };

    const handleSubmit = (event) => {
    event.preventDefault();
    const newBoard = {
        title: boardFormData.title, 
        owner: boardFormData.owner,
    }
    props.onHandleBoardSubmit(newBoard);
    setBoardFormData(boardDefaultState);
    };

    return (
    <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="title">Title: </label>
        <input type="text" id="title" name="title" onChange={handleChange} value={boardFormData.title}></input>
        </div>
        <div>
        <label htmlFor="owner"> Owner: </label>
        <input type="text" id="owner" name="owner" onChange={handleChange} value={boardFormData.owner}></input>
        </div>
        <div>
        <input type="submit" value="Add a Board"></input>
        </div>
    </form>
    );
};
    
    export default NewBoardForm;