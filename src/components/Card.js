import React from 'react';
import './Card.css';

//on click heart adds to likes
//on click broken heart deletes likes
//garbage deletes card 
//we need the card object state to populate the message, and likes?!

const Card = ({card, deleteCard, addOneLikeToCard, removeOneLikeToCard}) => {
    
    return (<div className="card-container">
            <p className='card-item__message'>{card.message}</p>
            <ul className='card-item__controls'>
                <p>{card.likes_count}  likes</p>
                {/* put these elements in a grid */}
                <span onClick={() => addOneLikeToCard(card)}>  ❤️  </span>
                <span onClick={() => removeOneLikeToCard(card)}>💔  </span>
                <span onClick={() => deleteCard(card)}>🗑️  </span>
            </ul>
            </div>);
};


export default Card;


