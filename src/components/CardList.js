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
};

export default CardList;
