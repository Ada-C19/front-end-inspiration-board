import React from 'react'
import CardsList from './CardsList';
import CardForm from './CardForm';

const SelectedBoard = ({ selectedBoard, cards, deleteCard, createCard, increaseLikedCount}) => {
  console.log(selectedBoard)
  // console.log(selectedBoard.cards)
  return (
    <div>
      <h2>Selected Board: {selectedBoard.title}</h2>
      <CardsList cards={cards} deleteCard = {deleteCard} increaseLikedCount={increaseLikedCount}></CardsList>
      <CardForm createCard={createCard}/>
    </div>
  )
}

export default SelectedBoard;