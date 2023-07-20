import React from 'react';
import './Card.css';

//on click heart adds to likes
//on click broken heart deletes likes
//garbage deletes card 
//we need the card object state to populate the message, and likes?!

const Card = ({card, deleteCard, addOneLikeToCard, removeOneLikeToCard, }) => {
    
    return (<div className="card-container">
            <p className='card-item__message'>message goes here</p>
            <ul className='card-item__controls'>
                <p>likes count number goes here</p>
                {/* put these elements in a grid */}
                <span>  ❤️  </span>
                <span>💔  </span>
                <span>🗑️  </span>
            </ul>
            </div>);
};


export default Card;


