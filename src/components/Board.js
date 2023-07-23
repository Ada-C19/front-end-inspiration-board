import React from 'react';

const Board = ({ board_id, title, cards}) => {

  return (
    <select onChange={handleBoardChange}>
    </select>
  )
  }
  
export default Board;

// class Board(db.Model):
// board_id = db.Column(db.Integer, primary_key=True)
// title = db.Column(db.String, nullable=False)
// owner = db.Column(db.String, nullable=False)
// cards = db.relationship("Card", back_populates="board")