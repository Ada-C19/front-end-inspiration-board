import React from "react";
import PropTypes from 'prop-types';

const Cards = ( {id, message, likesCount} ) => {
    return (
        <div>
            <div>{id}</div>
            <div>{message}</div>
        </div>
    )
}

Cards.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    likesCount: PropTypes.number.isRequired,
}

export default Cards