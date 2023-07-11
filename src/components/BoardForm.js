import React, {useState} from 'react';
import './BoardForm.css';


const AddBoard = (props) => {
    return (
    <form className='NewBoardForm'>
        <h3 id='boardtitle'>Create New Board</h3>
        <div className='input'>
        <label htmlFor="name">Title</label>
        <input type="text" id="name" name='name' ></input>
        <label htmlFor="owner">Owner's Name</label>
        <input type="text" id="owner" name='owner' ></input>
        <input type="submit" value="Submit"></input>
        <button className='button'>Hide New Board Form</button>
        </div>
    </form>
    )}

export default AddBoard;