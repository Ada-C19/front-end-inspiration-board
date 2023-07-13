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


    const[boardName, setBoardName] = useState('');
    const boardInput = (event) =>{
        setBoardName(event.target.value);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        const newBoard = {
        title:boardName,
        owner: '',
       };
    
        props.handleSubmit(newBoard);
        setBoardName('');}
    return (
    <section>
    <h3 id='boardtitle'>Create New Board</h3>
    <form className={hidden} onSubmit={onSubmit}>
        <div className= 'input'>
            <label htmlFor="name">Title</label>
            <input type="text" id="name" name='name'  onChange={boardInput} value={boardName}></input>
            <label htmlFor="owner">Owner's Name</label>
            <input type="text" id="owner" name='owner' ></input>
            <input type="submit" value="Submit"></input>
        <p>Preview:{boardName} </p>
        </div>
    </form>
    <button className='button' onClick={handleHideBoard}>{hiddenText}</button>
    </section>
    )};

AddBoard.propTypes = {
   handleSubmit: PropTypes.func
    };
export default AddBoard;