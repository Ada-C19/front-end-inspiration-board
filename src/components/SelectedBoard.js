import React from 'react'
import PropTypes from 'prop-types';
import './SelectedBoard.css';

const SelectedBoard = ({ selectedBoard, cards, deleteCard, createCard, increaseLikedCount, selectedTheme}) => {
  return (
    <div className={`${selectedTheme}-display-selected-board`}>
      <h2 className={`${selectedTheme}-selected-board-title`}>Selected Board: {selectedBoard.title}</h2>
    </div>
  );
};

SelectedBoard.propTypes = {
  selectedBoard: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(
      PropTypes.shape({
        card_id: PropTypes.number.isRequired,
        message: PropTypes.string.isRequired,
        liked_count: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card_id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      liked_count: PropTypes.number.isRequired,
    })
  ).isRequired,
  deleteCard: PropTypes.func.isRequired,
  createCard: PropTypes.func.isRequired,
  increaseLikedCount: PropTypes.func.isRequired,
  selectedTheme: PropTypes.string.isRequired,
  };
export default SelectedBoard;