import React, {useState} from 'react';
import './CardForm.css';
import PropTypes from 'prop-types';

const AddCard = (props) => {

return (
    <section className='card-info'>
        <h3>Create New Card</h3>
        <form >
        <label htmlFor="message">Message</label> <br />
        <input type="text" id="message" name="message" pattern='.{1,40}' required ></input> <br />
        <input type="submit" value="Submit"></input>
        <p>Preview:</p>
        </form>

    </section>
)



}

AddCard.propTypes = {
    handleSubmit: PropTypes.func 
};
export default AddCard;