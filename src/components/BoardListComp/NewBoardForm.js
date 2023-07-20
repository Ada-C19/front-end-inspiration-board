import React, { useState } from "react";
import "./NewBoardForm.css";

const NewBoardForm = ({ onBoardFormSubmit }) => {
  const [newBoardTitle, setNewBoardTitle] = useState("");
  const [newBoardOwner, setNewBoardOwner] = useState("");

  const handleBoardTitleChange = (event) => {
    setNewBoardTitle(event.target.value);
  };

  const handleBoardOwnerChange = (event) => {
    setNewBoardOwner(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newBoard = {
      title: newBoardTitle,
      owner: newBoardOwner,
    };

    onBoardFormSubmit(newBoard);
    setNewBoardOwner("");
    setNewBoardTitle("");
  };

    return (
        <form className="new-board-form" onSubmit={handleSubmit}>
            <h2>Create New Board</h2>
            <div>      
                <input
                className="new-board-form-input"
                type="text" 
                id="newBoardTitle" 
                name="newBoardTitle" 
                onChange={handleBoardTitleChange} 
                value={newBoardTitle}
                placeholder="Title" />
                
            </div>
            <div>
                <input 
                className="new-board-form-input"
                type="text" 
                id="newBoardOwner" 
                name="newBoardOwner" 
                onChange={handleBoardOwnerChange} 
                value={newBoardOwner}
                placeholder="Owner" />
            </div>
            {(newBoardTitle==='' || newBoardOwner==='') && <div className="warning"> Please fill out all fields. </div>}
            <div>
                <input className="new-board-form-btn" type="submit" value="add board" disabled={newBoardTitle==='' || newBoardOwner===''}/>
            </div>
        </form>
    );
    
};

export default NewBoardForm;
