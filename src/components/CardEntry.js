import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardEntry = (props) => {
 
    return (
        <div className={props.cardId}>
            <h2>Card message: {props.message}</h2>
            <button onClick={(e) => props.onLikeCard(props.cardId)}>Likes💕 {props.likesCount}</button>
            <button onClick={(e) => props.onUnregister(props.cardId)}>Delete</button>
        </div>
    );
};

export default CardEntry;