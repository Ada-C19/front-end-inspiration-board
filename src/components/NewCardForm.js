import React from 'react';
import './NewForm.css';

const NewCardForm = ({selectedBoard, postNewCard, isSubmitDisabled, cardObject, setCardObject}) => {
    
    const updatedCardObject = (changeEvent) => {
        console.log(cardObject)
        setCardObject({
        ...cardObject,
        message: changeEvent.target.value,
        board_id: selectedBoard.board_id
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

