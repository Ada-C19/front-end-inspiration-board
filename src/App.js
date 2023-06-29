import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import CardList from './components/CardList';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
import BoardSelectRadio from './components/BoardSelectRadio';

import boardData from './data/boards.json';
// use ${process.env.REACT_APP_BACKEND_URL} to make API calls

const boardsURL = `${process.env.REACT_APP_BACKEND_URL}`

const getAllBoards = () => {
  return axios.get(`${boardsURL}/boards`)
  .then((response) => {
    return (response.data.map(convertBoardFromAPI))})
  .catch((e) => console.log(e));
}

const convertBoardFromAPI = (data) => {
    return {
      id: data.board_id,
      title: data.title,
      owner: data.owner
    };
};

const getCardsForBoard = (boardId) => {
  return axios.get(`${boardsURL}/boards/${boardId}/cards`)
    .then((response) => console.log(response.data.cards))
}

const App = () => {
  const [boards, setBoards] = useState(boardData);
  const [targetBoardId, setTargetBoardId] = useState(1);

  // const fetchBoardData = () => {
  //   getAllBoards().then((boards) => setBoards(boards))
  // }

  // useEffect( () => {fetchBoardData()}, [])

  const handleSelectBoard = (boardId) => {
    setTargetBoardId(boardId);
    // getCardsForBoard(boardId);
  };

  const findIndexOfTargetBoard = () => {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === targetBoardId) {
        return i;
      }
    }
  }

  const displayCards = () => {
    const boardIndex = findIndexOfTargetBoard();
    return (
      <CardList cards={boards[boardIndex].cards} handleLike={handleLike} />
    )
  };

  const handleLike = (cardId) => {
    let newBoards = [...boards];

    let targetIndex = findIndexOfTargetBoard()

    newBoards[targetIndex].cards = newBoards[targetIndex].cards.map((card) => {
      if (cardId === card.id) {
        return { ...card, likesCount: card.likesCount + 1 };
      } else { return card; };
    });

    setBoards(newBoards);
  }

  const handleSubmitCard = (newCard) => { }
  //   const nextId = Math.max(...cards.map(card => card.id)) + 1;
  //   const newCardObject = {
  //     id: nextId,
  //     message: newCard.message,
  //     board: newCard.board,
  //     likesCount: 0,
  //   };
  //   setCards((prevData) => [newCardObject, ...prevData])
  // }

  return (
    <div className="App">
      <header>
        <h1>MMNJ INSPO BOARD</h1>
      </header>
      <main>
        <BoardSelectRadio boards={boards} onBoardSelect={handleSelectBoard} />
        {/* <Board board_id={targetBoardId} /> */}
        {displayCards(targetBoardId)}
        <NewCardForm addCard={handleSubmitCard} />
      </main>
    </div>
  );
}

export default App;
