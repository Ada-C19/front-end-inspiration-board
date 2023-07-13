import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import CardList from './components/CardList';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
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

  // does not access CARDS data
  const fetchBoardData = () => {
    getAllBoards().then((boards) => setBoards(boards))
  }

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

  const currentBoard = () => {
    const boardIndex = findIndexOfTargetBoard();
    return (boards[boardIndex]);
  }

  const displayCards = () => {
    const boardIndex = findIndexOfTargetBoard();
    return (
      <CardList cards={boards[boardIndex].cards} handleLike={handleLike} />
    )
  };

  // TO DO:
  // change handleLike to toggle T/F for users
  // instead of each click adding to Likes total 

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

  const handleSubmitBoard = (newBoard) => { 
    console.log('New Board Form Submitted!');
    postBoardToAPI(newBoard);
  };

  const postBoardToAPI = (newBoard) => {
    let params = {
      title: newBoard.title,
      owner: newBoard.owner
    }
    axios.post(`${boardsURL}/boards`, params)
    .then((response) => console.log('Board Posted!', response.data))
    .catch((e) => console.log(e));
  }

  const deleteBoardFromAPI = (boardId) => {
    axios.delete(`${boardsURL}/boards/${boardId}`)
    .then((response) => console.log('Board Delted!', response.data))
    .catch((e) => console.log(e));
  }

  return (
    <div className="App">
      <header>
        <h1>MMNJ INSPO BOARD</h1>
      </header>
      <main>
        <div>
          <NewBoardForm addBoard={handleSubmitBoard}/>
          <BoardSelectRadio boards={boards} onBoardSelect={handleSelectBoard} />
        </div>
        <div>
          <Board 
            board_id={currentBoard().id} 
            title={currentBoard().title}
            owner={currentBoard().owner}
            deleteBoard={deleteBoardFromAPI}
            />
          {displayCards(targetBoardId)}
          <NewCardForm addCard={handleSubmitCard} />
        </div>
      </main>
    </div>
  );
}

export default App;
