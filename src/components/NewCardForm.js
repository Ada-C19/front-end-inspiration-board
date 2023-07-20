import React from 'react';
import { useState } from 'react';
import './NewForm.css';

const NewCardForm = ({selectedBoard, postNewCard, isSubmitDisabled}) => {
    const [cardObject, setCardObject] = useState({
        message: '',
        board_id: ''
    });

    const updatedCardObject = (changeEvent) => {
        setCardObject({
        ...cardObject,
        message: changeEvent.target.value,
        board_id: selectedBoard.board_id
        });
    };
    // in this function we want to setCardObject

    //NEW FUNCTION
    //have a variable named newMessage and set it to the string user submitted
    //spread our cardobject (copy) and assign it to updatedCardObject
    //set our updated card object with new message as the value for message key
    //set our updated card object with selected_board id as the value for board_id
    //use our updated card object as our post new card argument
    //refresh state , set card object to blank again?
    //maybe use newMessage variable in our disable submit?


    const submitNewCard = (e) => {
        e.preventDefault();
        postNewCard(updatedCardObject);
        setCardObject({ message: '', board_id: '' });
    };
    //submit new card should take custom message and board_id from selected board

    // we need to make sure the value of message is a string! what is it right now????


    return (
        <div className="new-card-form">
            <h2>Make a Wish</h2>
            <form onSubmit={submitNewCard}>
            <label>Wish:</label>
            <input  id="message" 
                    value={cardObject.message} 
                    onChange={updatedCardObject}
                    className={isSubmitDisabled(cardObject.message) ? 'invalid-form-input' : ''}
                    />
            <div>
                <p>Preview: "{cardObject.message}"</p>
            </div>
            <div>
            <input  className='submit-button' 
                    type="submit"
                    disabled={isSubmitDisabled(cardObject.message)}
                    ></input>
            </div>
            </form>
        </div>
    );
};




export default NewCardForm;

