import React from 'react';
import './Card.css';
import lantern from './lantern.png';

//on click heart adds to likes
//on click broken heart deletes likes
//garbage deletes card 
//we need the card object state to populate the message, and likes?!

const Card = ({card, deleteCard, addOneLikeToCard, removeOneLikeToCard}) => {
    
    return (<div className="card-container" id="swaying-image">
            <p className='card-item__message'>{card.message}</p>
            <ul className='card-item__controls'>
                <p>{card.likes_count}  likes</p>
                {/* put these elements in a grid */}
                <ul>
                    <li onClick={() => addOneLikeToCard(card)}>  ❤️  </li>
                    <li onClick={() => removeOneLikeToCard(card)}>💔  </li>
                    <li onClick={() => deleteCard(card)}>🗑️  </li>
                </ul>
                {/* <span onClick={() => addOneLikeToCard(card)}>  ❤️  </span>
                <span onClick={() => removeOneLikeToCard(card)}>💔  </span>
                <span onClick={() => deleteCard(card)}>🗑️  </span> */}
            </ul>
            </div>);
};


export default Card;


