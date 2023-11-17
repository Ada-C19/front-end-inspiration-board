import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './CardEntry.css';

const CardEntry = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedMessage, setEditedMessage] = useState(props.message);

  const handleLike = (likeStatus) => {
    props.onLikeCard(props.cardId, likeStatus);
  };

  const handleCancelEdit = () => {
    setIsEditing(!isEditing);
    setEditedMessage(props.message); 
  };

  const handleSaveEdit = () => {
    const theEditedMessage = {
        message : editedMessage
    };

    props.onUpdateMessage(props.cardId, theEditedMessage);
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <div className='edit-card-container'>
          <input
            type="text"
            id="edit-card"
            value={editedMessage}
            onChange={(e) => setEditedMessage(e.target.value)}
          />
          <span>
            <button className="card-button save" onClick={handleSaveEdit}>Save</button>
            <button className="card-button" onClick={handleCancelEdit}>Cancel</button>
          </span>
        </div>
      ) : (
        <div>
          <h4>{props.message}</h4>
          <div className="card-button-container">
            <button className="card-button" onClick={() => handleLike(true)}>👍🏽 Like {props.likesCount > 0 && <span>({props.likesCount})</span>}</button>
            <button className="card-button" onClick={() => handleLike(false)}>👎🏽 Dislike</button>
            <button className="card-button" onClick={() => setIsEditing(!isEditing)}>✏️ Edit</button>
            <button className="card-button" onClick={() => props.onUnregister(props.cardId)}>❌ Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

CardEntry.propTypes = {
  cardList: PropTypes.arrayOf(
    PropTypes.shape({
      cardId: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
    })
  ),
  onLikeCard: PropTypes.func.isRequired,
  onUpdateMessage: PropTypes.func.isRequired, 
  onUnregister: PropTypes.func.isRequired,
};

export default CardEntry;
