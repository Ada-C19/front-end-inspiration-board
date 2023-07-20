import React from 'react';
import { useState } from 'react';
import './NewForm.css';

const NewCardForm = ({selectedBoard, postNewCard, isSubmitDisabled}) => {
    const [cardObject, setCardObject] = useState({
        message: '',
        board_id: selectedBoard.board_id
    });
    //board id should always be selected board so adrian and i set it to the default card object value

    const updatedCardObject = (changeEvent) => {
        setCardObject({
        ...cardObject,
        message: changeEvent.target.value,
        });
    };
    // in this function we want to setCardObject


    const submitNewCard = (e) => {
        e.preventDefault();
        postNewCard(cardObject);
        setCardObject({ message: '', board_id: '' });
    };
    //updating on change in the JSX 


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

