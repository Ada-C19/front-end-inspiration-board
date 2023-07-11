import React, {useState} from 'react';
import './BoardForm.css';


const AddBoard = (props) => {
    return (
    <form className='NewBoardForm'>
        <h1 id='boardtitle'>Create New Board</h1>
        <label htmlFor="name">Title</label>
        <input type="text" id="name" name='name' ></input>
        <label htmlFor="owner">Owner's Name</label>
        <input type="text" id="owner" name='owner' ></input>
    </form>
    )}

export default AddBoard;