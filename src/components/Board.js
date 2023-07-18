import React from 'react';
import CardList from './CardList';
import PropTypes from 'prop-types';
import './Board.css';


function Board({ cardData, increaseLikesCount, deleteCard, sortCards }) {
  const handleSortChange = (event) => {
    sortCards(event.target.value);
  };
  return (
    <div>
      <select className='sort-select' onChange={handleSortChange}>
        <option value=''>Sort By:</option>
        <option value="id">ID</option>
        <option value="alphabetical">A-Z</option>
        <option value="likes">Likes Count</option>
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
