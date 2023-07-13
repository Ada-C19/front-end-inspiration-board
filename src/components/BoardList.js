import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/boards')
      .then(result => {
        setBoards(result.data);
      })
      .catch(error => {
        console.error("Error fetching boards", error);
      });
  }, []);

  return (
    <div>
      {boards.map((board) => (
        <Board
          key={board.id}
          title={board.title}
          owner={board.owner}
          cards={board.cards}
        />
      ))}
    </div>
  );
};

export default BoardList;