import React from 'react';
import { useState } from 'react';

const NewBoardForm = () => {

    const [title, setTitle] = useState('');
    const [owner, setOwner] = useState('');

//we are going to want an event handler function here!why?
//because we want to say" when we enter a title and owner of a new board
//we want that data to persist in the back end and we want to be able to use that data

//we need changeEvent as a param for this function and onChange in our jsx to apply these changes
// we need two event functions, one to handle title and one to handle owner 
    const newTitle = (changeEvent) => {
        console.log('Details about the element that fired the event:', changeEvent.target);
        console.log('The value of that element:', changeEvent.target.value);
        setTitle(changeEvent.target.value);
    };

    const newOwner = (changeEvent) => {
        console.log('Details about the element that fired the event:', changeEvent.target);
        console.log('The value of that element:', changeEvent.target.value);
        setOwner(changeEvent.target.value);
    };


    return (
    <form>
        <p> Title </p>
        <input value={title} onChange={newTitle} />
        <p> Owner's name </p>
        <input value={owner} onChange={newOwner}/>
        <input type="submit" ></input>
    </form>
)

};

export default NewBoardForm;

//submit button if valid entry becomes usable, 
//entry must be between 0 - 40 characters