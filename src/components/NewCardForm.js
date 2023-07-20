import React, {useState} from "react";
import PropTypes from "prop-types";
// import './NewCardForm.css';
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
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="message"> Card Message: </label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                />
            </div>
            <button disabled={((formData.message.length === 0) || (formData.message.length > 40))}className="submit-button" type="submit">Submit Card</button>
        </form>
    );
};

NewCardForm.propTypes = {
    handleCardSumbit: PropTypes.func.isRequired
};

export default NewCardForm;
