import React from 'react';

const Board = ({ board_id, title}) => {

  return (
    <div>
      {title}
      {board_id}
    </div>
  )
  }
  
export default Board;

// class Board(db.Model):
// board_id = db.Column(db.Integer, primary_key=True)
// title = db.Column(db.String, nullable=False)
// owner = db.Column(db.String, nullable=False)
// cards = db.relationship("Card", back_populates="board")