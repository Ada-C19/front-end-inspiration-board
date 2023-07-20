import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CardEntry = (props) => {
    const [likesCount, setLikesCount] = useState(0)
    const increaseLikesCount = () => {
        setLikesCount((likesCount) => likesCount + 1)
    };

    return (
        <div className={props.cardId}>
            <h2>Card message: {props.message}</h2>
            <button onClick={(e) => props.onClickLike(props.cardId)}>Likes💕 {props.likesCount}</button>
            <button>Delete</button>
        </div>
    );
};

export default CardEntry;