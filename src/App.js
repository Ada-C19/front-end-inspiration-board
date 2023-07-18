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
    return (response.data.map(convertBoardFromAPI))
  })
  .catch((e) => console.log("error during getAllBoards!", e));
}

const convertBoardFromAPI = (data) => {
    return {
      id: data.board_id,
      title: data.title,
      owner: data.owner
    };
};

const getCardsForBoard = (boardId) => {
  console.log(`calling ${boardsURL}/boards/${boardId}/cards`)
  return axios.get(`${boardsURL}/boards/${boardId}/cards`)
    .then((response) => {
      let cards = response.data.cards.map(convertCardFromAPI);
      console.log(cards);
      return cards})
    .catch((e) => console.log("error in Getting Cards for Board", e.message))
}

const convertCardFromAPI = (card) => {
  return {
    id: card.card_id,
    message: card.message,
    likesCount: card.likes_count,
    board: card.board_id
  }
}

const App = () => {
  const [boards, setBoards] = useState(boardData);
  const [targetBoardId, setTargetBoardId] = useState(11);
  const [cards, setCards] = useState([])

  // does not access CARDS data
  const fetchBoardData = () => {
    getAllBoards()
      .then((boards) => setBoards(boards))
  }

  useEffect( () => {fetchBoardData()}, [])

  const handleSelectBoard = (boardId) => {
    setTargetBoardId(boardId);
    // getCardsForBoard(boardId);
  };

  const findIndexOfTargetBoard = () => {
    for (let i = 0; i < boards.length; i++) {
      if (boards[i].id === targetBoardId) {
        return i;
      }
    return 0
    }
  }

  const currentBoard = () => {
    for (let board of boards) {
      if (board.id === targetBoardId) {
        return board;
      }}
    return boards[0]
  }

  // useEffect( () => {currentBoard()}, [targetBoardId])

  // const fetchCardData = () => 

  // const displayCards = () => {
  //   getCardsForBoard(targetBoardId).then((cards) =>{
  //     return (
  //       <CardList cards={cards} handleLike={handleLike} />
  //     )})
  //   };

    const fetchCards = () => {
      getCardsForBoard(targetBoardId).then((cards) => setCards(cards))
    };
    
    useEffect( () => {fetchCards()}, [targetBoardId]);


  // TO DO:
  // change handleLike to toggle T/F for users
  // instead of each click adding to Likes total 

  const handleLike = (cardId) => {
    // let newBoards = [...boards];

    // let targetIndex = findIndexOfTargetBoard()

    // newBoards[targetIndex].cards = newBoards[targetIndex].cards.map((card) => {
    //   if (cardId === card.id) {
    //     return { ...card, likesCount: card.likesCount + 1 };
    //   } else { return card; };
    // });

    // setBoards(newBoards);
  }

  // should we include likesCount = 0 as part of the submission,
  // or have the likesCount default to 0 on the back end?
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
    .then((response) => console.log('Board Deleted!', response.data))
    .catch((e) => console.log(e.message));
  }

  return (
    <div className="App">
      <header>
        <h1>MNNJ INSPO BOARD</h1>
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
          <CardList cards={cards} handleLike={handleLike} />
          <NewCardForm addCard={handleSubmitCard} />
        </div>
      </main>
    </div>
  );
}

export default App;
