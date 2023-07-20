import React, {useState} from "react";
import PropTypes from "prop-types";
import './NewCardForm.css';


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
            <button className="submit-button" type="submit">Submit Card</button>
        </form>
    );
};

NewCardForm.propTypes = {
    handleCardSumbit: PropTypes.func.isRequired
};

export default NewCardForm;
