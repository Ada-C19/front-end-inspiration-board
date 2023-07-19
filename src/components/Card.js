import React from 'react';
import './Card.css';

//on click heart adds to likes
//on click broken heart deletes likes
//garbage deletes card 
const Card = (props) => {
    
    return (<div className="card-container">
            <p className='card-item__message'>Message goes here</p>
            <ul className='card-item__controls'>
                <li><p>likes count number goes here</p></li>
                <li><p>❤️</p></li>
                <li><p>💔</p></li>
                <li><p>🗑️</p></li>
            </ul>
            </div>);
};


export default Card;


