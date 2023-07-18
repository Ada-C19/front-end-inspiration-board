import React, {useState} from 'react';
import './CardForm.css';
import PropTypes from 'prop-types';


const AddCard = (props) => {
    const[cardMessage, setCardMessage] = useState('');
    const cardInput = (event) =>{
       
        const cardData = {message : event.target.value,
            likes_count: 0
        }
        setCardMessage(cardData);
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        props.cardSubmit(cardMessage);
        setCardMessage('');}
    return (
        <section className='card-info'>
            <h3>Create New Card</h3>
            <form onSubmit={onSubmit}>
            <label htmlFor="message">Message</label> <br />
            <input type="text" id="message" name="message"  onChange={cardInput} pattern='.{1,40}' value={cardMessage.message} required ></input> <br />
            <input type="submit" value="Submit"></input>
            <p>Preview: {cardMessage.message}</p>
            </form>

        </section>
    )



}

AddCard.propTypes = {
    handleSubmit: PropTypes.func 
};
export default AddCard;