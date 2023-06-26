import React from "react";
import PropTypes from 'prop-types';

const Cards = ( {id, message, likesCount, onClick} ) => {

    const heartDisplay = likesCount > 0 ? '❤️' : '🤍';

    const handleClick = () => onClick(id);

    return (
        <div>
            <div>Card: {id}</div>
            <div>{message}</div>
            <button onClick={handleClick}>{heartDisplay} {likesCount}</button>
            <br/>
        </div>
    )
}

Cards.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
    // handleLike: PropTypes.func
}

export default Cards