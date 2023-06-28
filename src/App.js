import React, { useState, useEffect } from 'react';
import './App.css';

import CardList from './components/CardList';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
import BoardSelectRadio from './components/BoardSelectRadio';

import boardData from './data/boards.json';
// use ${process.env.REACT_APP_BACKEND_URL} to make API calls


const App = () => {
  const [boards, setBoards] = useState(boardData);
  const [targetBoardId, setTargetBoardId] = useState(1); // should be an id
  // const [cards, setCards] = useState(boards[targetBoardId].cards);

  const handleSelectBoard = (boardId) => {
    setTargetBoardId(boardId);
    // setCards(boards[boardId].cards);
  };

  const findTargetBoard = (id) => {

  }
  // listens for changes to target board and updates cards state accordingly
  // useEffect(()=> {
  //   setCards(boards[targetBoardId].cards);
  // }, [targetBoardId, boards]);

  const displayCards = (boardId) => {
    for (let board of boards) {
      if (board.id === boardId) {
        return <CardList cards={board.cards} onClick={handleLike}/>
      }
    }
  };
  // old version
  // const handleLikeOld = id => {
  //   setCards((prevCards) => {
  //     return prevCards.map((card) => {
  //       if (id === card.id) {
  //         return { ...card, likesCount: card.likesCount + 1 };
  //       } else {
  //         return card;
  //       };
  //     })
  //   })
  // }

  const handleLike = cardId => {
    setBoards((prevBoards) => {
      return prevBoards.map((board) => {
        if (board.id === targetBoardId) {
          console.log('preparing to map board', board);
          return board.cards.map((card) => {
            if (cardId === card.id) {
              return {...card, likesCount: card.likesCount + 1};
            } else {return card;};
          })
        } else {return board;};
      })
    })
  }

  const handleSubmitCard = (newCard) => {}
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
        <BoardSelectRadio boards={boards} onBoardSelect={handleSelectBoard}/>
        <Board board_id={targetBoardId}/>
        {displayCards(targetBoardId)}
        {/* <CardList cards={cards} onClick={handleLike} /> */}
        {/* <Board board={boards} cards={cards} /> */}
        <NewCardForm addCard={handleSubmitCard} />
      </main>
    </div>
  );
}

export default App;
