import React from "react";

const Card = ({ id, likesCount, message, onUpdateLikes, onDeleteCard }) => {
  const handleLikeClick = (isLike) => {
    onUpdateLikes(id, isLike);
  };

  const handleDeleteCard = () => {
    onDeleteCard(id);
  };
  return (
    <section>
      <p>{message}</p>
      <p>{likesCount}</p>
      <button className="like-button" onClick={() => handleLikeClick(true)}>
        🩷
      </button>
      <button className="unlike-button" onClick={() => handleLikeClick(false)}>
        👎
      </button>
      <button className="delete-button" onClick={handleDeleteCard}>
        🗑️
      </button>
    </section>
  );
};

export default Card;
