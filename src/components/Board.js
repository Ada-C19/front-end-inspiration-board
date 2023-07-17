import React from 'react';
import CardList from './CardList';
import PropTypes from 'prop-types';


function Board({ cardData, increaseLikesCount, deleteCard }) {

  return (
    <div>
      <CardList 
      cardData={cardData} 
      deleteCard={deleteCard}
      increaseLikesCount={increaseLikesCount}
      />
    </div>
  );
};

Board.propTypes = {
  cardData: PropTypes.array.isRequired,
  increaseLikesCount: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Board;
