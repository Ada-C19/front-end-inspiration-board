import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Board = ({ title, owner, cards }) => {
  return (
    <div className="board">
      <h2>{title}</h2>
      <p>{owner}</p>
      <div className="card-list">
        {cards.map((card) => (
          <Card
            key={card.id}
            message={card.message}
            likesCount={card.likesCount}
          />
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number,
    })
  ).isRequired,
};

export default Board;
