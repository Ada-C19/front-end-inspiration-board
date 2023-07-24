import React from 'react';
import './NewForm.css';

const NewCardForm = ({selectedBoard, postNewCard, isSubmitDisabled, cardObject, setCardObject, cardsData, setCardsData}) => {

    const updatedCardObject = (changeEvent) => {
        setCardObject({
        ...cardObject,
        message: changeEvent.target.value,
        board_id: selectedBoard.board_id
        });
    };

    const submitNewCard = (e) => {
        e.preventDefault();
        postNewCard(cardObject);
        setCardObject({ message: '', board_id: '' });
    };

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
                <p className='preview-message'>Preview: "{cardObject.message}"</p>
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