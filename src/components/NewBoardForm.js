import React, { useState } from "react";
import FormFieldError from "./FormFieldError";
import "./NewBoardForm.css";

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
        };

        props.onHandleBoardSubmit(newBoard);
        setBoardFormData(boardDefaultState);
    };

    const toggleHiddenForm = () => {
        setIsHidden(!isHidden);
    };

    const hiddenClass = isHidden ? "hidden-component" : null;
    const hiddenFormText = isHidden ? "Show Board Form" : "Hide Board Form";

    return (
    <section className="form">
        <form onSubmit={handleSubmit}>
            <h2>Create New Board</h2>
            <div className={hiddenClass}>
                <div className="title-owner-container">
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Board Title"
                        onChange={handleChange} 
                        value={boardFormData.title} 
                    />
                    <FormFieldError 
                        className="error" 
                        message={props.error?.title} 
                    />
                </div>
                <div className="title-owner-container">
                    <input 
                        type="text" 
                        id="owner" 
                        name="owner" 
                        placeholder="Board Owner"
                        onChange={handleChange} 
                        value={boardFormData.owner} 
                    />
                    <FormFieldError message={props.error?.owner} />
                </div>
            </div>
                <div className="board-submit">
                    <input 
                        type="submit" 
                        value="Add Board" 
                        className="board-form-button"
                    />
                </div>
        </form>
        <hr/>
        <div className="hide-board">
            <button className="board-form-button" onClick={toggleHiddenForm}>{hiddenFormText}</button>
        </div>
    </section>
    );
};
    
export default NewBoardForm;