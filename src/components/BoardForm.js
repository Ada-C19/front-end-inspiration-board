import React, {useState} from 'react';
import './BoardForm.css';

const AddBoard = (props) => {
    const [hide, setHide] = useState(false)
    const handleHideBoard = (event) =>{
        setHide(current => !current)
    }

    const hidden = hide? 'hide-form':""
    const hiddenText = hide? "Show New Board Form": "Hide New Board Form"
    return (
    <section>
    <h3 id='boardtitle'>Create New Board</h3>
    <form className={hidden}>
        <div className= 'input'>
            <label htmlFor="name">Title</label>
            <input type="text" id="name" name='name' ></input>
            <label htmlFor="owner">Owner's Name</label>
            <input type="text" id="owner" name='owner' ></input>
            <input type="submit" value="Submit"></input>
        <p>Preview: </p>
        </div>
    </form>
    <button className='button' onClick={handleHideBoard}>{hiddenText}</button>
    </section>
    )};

export default AddBoard;