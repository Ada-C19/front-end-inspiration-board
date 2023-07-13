import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from './Card';

const CardList = ({ onUpdateCard }) => {
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

  const handleDelete = (id) => {
    setCards(cards.filter(card => card.id !== id));

    axios.delete(`http://localhost:5000/cards/${id}`)
      .catch(error => {
        console.error('Error deleting card:', error);
      });
  };

  const cardComponents = cards.map((card) => {
    return (
      <li key={card.id}>
        <Card
          id= {card.id}
          message= {card.message}
          likesCount={card.likesCount}
          onUpdateCard={onUpdateCard}
          onDelete={handleDelete}
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
  onUpdateCard: PropTypes.func.isRequired,
};

export default CardList;
