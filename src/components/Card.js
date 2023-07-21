import React from 'react';
import './Card.css';
import lantern from './lantern.png';

//on click heart adds to likes
//on click broken heart deletes likes
//garbage deletes card 
//we need the card object state to populate the message, and likes?!

const Card = ({card, deleteCard, addOneLikeToCard, removeOneLikeToCard}) => {
    
    return (<div className="card-container" id="swaying-image">
                <h3 className='card-item__message'>{card.message}</h3>
                <p>{card.likes_count} likes</p>
                <section className='card-buttons'>
                    <span onClick={() => addOneLikeToCard(card)}>❤️</span>
                    <span onClick={() => removeOneLikeToCard(card)}>💔</span>
                    <span onClick={() => deleteCard(card)}>🗑️</span>
                </section>
            </div>);
};


export default Card;


