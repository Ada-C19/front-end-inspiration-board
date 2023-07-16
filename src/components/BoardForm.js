import React, {useState} from 'react';
import './BoardForm.css';
import PropTypes from 'prop-types';

const AddBoard = (props) => {
    const [hide, setHide] = useState(false)
    const handleHideBoard = () =>{
        setHide(current => !current)
    }

    const hidden = hide? 'hide-form':""
    const hiddenText = hide? "Show New Board Form": "Hide New Board Form"

    const boardDefault = {
        title:'',
        owner:''
    }
    const[boardEntry, setBoardEntry] = useState(boardDefault);
    const boardInput = (event) =>{
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
    
        const newFormData = {...boardEntry, [fieldName]: fieldValue};
        setBoardEntry(newFormData);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        props.handleSubmit(boardEntry);
        setBoardEntry('');}
    return (
    <section>
    <h3 id='boardtitle'>Create New Board</h3>
    <form className={hidden} onSubmit={onSubmit}>
        <div className= 'input'>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name='title'  onChange={boardInput} value={boardEntry.title} required></input>
            <span>You must enter board title</span> <br />
            <label htmlFor="owner">Owner's Name</label>
            <input type="text" id="owner" name='owner' onChange={boardInput} value={boardEntry.owner} required></input>
            <span>You must enter owner name </span> <br />
            <input type="submit" value="Submit"></input>
        <p>Preview:{boardEntry.title} - {boardEntry.owner} </p>
        </div>
    </form>
    <button className='button' onClick={handleHideBoard}>{hiddenText}</button>
    </section>
    )};

AddBoard.propTypes = {
   handleSubmit: PropTypes.func
    };
export default AddBoard;