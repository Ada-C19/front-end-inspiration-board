import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from './Card';

const CardList = ({cardData, onUpdateCard}) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/cards')
      .then(result => {
        setCards(result.data);
      })
      .catch(error => {
        console.error("Error fetching cards", error);
      });
  }, []);

  const cardComponents = cardData.map((card) => {
    return (
      <li key={card.id}>
        <Card
          id= {card.id}
          message= {card.message}
          likes={card.likesCount}
          onUpdateCard={onUpdateCard}
        />
      </li>
    )
  });

  return (
    <div>
      {cardComponents}
    </div>
  );
};

CardList.propTypes = {
  cardData: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.string.isRequired,
  })
  ).isRequired,
  onUpdateCard: PropTypes.func.isRequired,
};
export default CardList;
