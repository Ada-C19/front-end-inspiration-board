import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = (props) => {

  const cardClass = props.showCards ? '' : 'hidden';
  return (
    <ol className={cardClass}>
      {props.cards.map((card) => (
        <Card
        key={card.id}
        id= {card.id}
        message= {card.message}
        likesCount={card.likes_count}
        onDelete={props.onDelete}
        updateLikeCount={props.updateLikeCount}

        />
      ))}
      <label htmlFor="cards">Sort Your Cards!</label>
        <select name='cards' id='cards' onChange={(e) => props.sortCards(e.target.value)}>
          <option value={'message'}>Alphabetically</option>
          <option value={'id'}>By Id</option>
          <option value={'likes_count'}>By Likes, descending</option>
        </select>
      
    </ol>
  );
};


CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likes_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  showCards: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  updateLikeCount: PropTypes.func.isRequired,
  sortCards: PropTypes.func.isRequired,
};

export default CardList;
