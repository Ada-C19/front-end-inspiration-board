import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewBoardForm.css'

const NewBoardForm = (props) => {
    const boardDefaultState = {
        title: "",
        owner: "",
    };
    
    const [boardFormData, setBoardFormData] = useState(boardDefaultState);
    const [isHidden, setIsHidden] = useState(false);
    
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

    const toggleHiddenForm = () => {
        setIsHidden(!isHidden);
    };

    const hiddenClass = isHidden ? 'hidden-component' : null;
    const hiddenFormText = isHidden ? 'Show Board Form' : 'Hide Board Form';

    return (
    <section>
        <form onSubmit={handleSubmit} className={hiddenClass}>
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
        <button onClick={toggleHiddenForm}>{hiddenFormText}</button>
    </section>
    );
};
    
    export default NewBoardForm;