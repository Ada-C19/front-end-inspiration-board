import React from 'react';
import './Card.css';

const Card = ({card, deleteCard, addOneLikeToCard, removeOneLikeToCard}) => {
    const noiceAlert = () => { 
        if (card.likes_count === 69 )
        { alert('noice')};
    };


    return (<div className="card-container" id="swaying-image">
                <h3 id='card-item__message'>{card.message}</h3>
                {card.likes_count >= 0 ? <p>{card.likes_count} likes</p> : <p>{card.likes_count} dislikes</p> }
                {noiceAlert()}
                <section className='card-buttons'>
                    <span onClick={() => removeOneLikeToCard(card)}>💔</span>
                    <span onClick={() => addOneLikeToCard(card)}>❤️</span>
                    <span onClick={() => deleteCard(card)}>🗑️</span>
                </section>
            </div>);
};

export default Card;