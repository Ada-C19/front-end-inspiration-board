// DeleteCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './DeleteCard.css';

const DeleteCard = ({ id, onDelete }) => {
    return (
        <button className="delete-button" onClick={() => onDelete(id)}></button>
    );
};

DeleteCard.propTypes = {
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default DeleteCard;
