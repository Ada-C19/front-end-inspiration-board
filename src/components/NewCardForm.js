import React, {useState} from "react";
import PropTypes from "prop-types";
import './NewCardForm.css';
import './NewBoardForm.css'
import '../App.css';


const NewCardForm = ({ handleCardSubmit }) => {

    const [formData, setFormData] = useState({
        message: "", 
        likesCount: 0
    });
    
    const handleInputChange = (event) => {
        const message = event.target.value; 
        setFormData((prevFormData) => ({
            ...prevFormData, 
            message: message
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleCardSubmit(formData);
    };

    return (
        <div className="board__form">
            <form onSubmit={handleSubmit}>
                <h2>New Card</h2>
                {/* <label htmlFor="message"> Card Message: </label> */}
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter a message"
                />
                <button disabled={((formData.message.length === 0) || (formData.message.length > 40))}className="submit-button" type="submit">Submit Card</button>
            </form>
        </div>
            
        
    );
};

NewCardForm.propTypes = {
    handleCardSumbit: PropTypes.func.isRequired
};

export default NewCardForm;
