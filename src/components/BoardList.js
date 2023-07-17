import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Board';
import NewBoardForm from './NewBoardForm';

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchBoards();
  }, []);

  const fetchBoards = () => { 
    axios
      .get('http://localhost:5000/boards')
      .then(result => {
        setBoards(result.data);
      })
      .catch(error => {
        console.error("Error fetching boards", error);
      });
  };

const addBoard = (board) => {
    const newBoard = {
      ...board,
      cards: [],
    };

    axios
      .post('http://localhost:5000/boards', newBoard)
      .then(response => {
        const createdBoard = response.data;
        setBoards(prevBoards => [...prevBoards, createdBoard]);
      })
      .catch(error => {
        handleError(error);
      });
    fetchBoards();
  };

  const handleError = (error) => {
    console.error('Error:', error);
  };

  return (
    <div>
        <Board
          key={board.id}
          title={board.title}
          owner={board.owner}
          cards={board.cards}
        />
    </div>
  );
};

export default BoardList;