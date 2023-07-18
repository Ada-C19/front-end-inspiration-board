import React from 'react';
import CardList from './CardList';
import PropTypes from 'prop-types';


function Board({ cardData, increaseLikesCount, deleteCard, sortCards }) {
  const handleSortChange = (event) => {
    sortCards(event.target.value);
  };
  return (
    <div>
      <select onChange={handleSortChange}>
        <option value="id">Sort by ID</option>
        <option value="alphabetical">Sort alphabetically</option>
        <option value="likes">Sort by number of likes</option>
      </select>
      <CardList 
      cardData={cardData} 
      deleteCard={deleteCard}
      increaseLikesCount={increaseLikesCount}
      sortCards={sortCards}
      />
    </div>
  );
};

Board.propTypes = {
  cardData: PropTypes.array.isRequired,
  increaseLikesCount: PropTypes.func.isRequired,
  deleteCard: PropTypes.func.isRequired,
  sortCards: PropTypes.func.isRequired
};

export default Board;
