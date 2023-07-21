import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import CardList from './components/CardList';
import Board from './components/Board';
import NewCardForm from './components/NewCardForm';
import NewBoardForm from './components/NewBoardForm';
import BoardSelectRadio from './components/BoardSelectRadio';
import SortCardRadio from './components/SortCardRadio';

const boardsURL = `${process.env.REACT_APP_BACKEND_URL}`

const getAllBoards = () => {
  const convertBoardFromAPI = (boardData) => {
    return {
      id: boardData.board_id,
      title: boardData.title,
      owner: boardData.owner
    };
  };
  return axios.get(`${boardsURL}/boards`)
    .then((response) => {
      return (response.data.map(convertBoardFromAPI))
    })
    .catch((e) => console.log("error during getAllBoards!", e.message));
};

const getCardsForBoard = (boardId) => {
  const convertCardFromAPI = (cardData) => {
    return {
      id: cardData.card_id,
      message: cardData.message,
      likesCount: cardData.likes_count,
      board: cardData.board_id
    };
  };

  return axios.get(`${boardsURL}/boards/${boardId}/cards`)
    .then((response) => {
      return response.data.cards.map(convertCardFromAPI);
    })
    .catch((e) => console.log("error in Getting Cards for Board", e.message))
};

const App = () => {
  const defaultEmptyBoardList = [{
    title: '',
    owner: '',
    id: 0
  }];

  const [boards, setBoards] = useState(defaultEmptyBoardList);
  const [targetBoardId, setTargetBoardId] = useState(null);
  const [cards, setCards] = useState([])
  const [displayBoardForm, setDisplayBoardForm] = useState(true)
  const [cardDisplaySortDirection, setCardDisplaySortDirection] = useState("ID")

  const fetchBoards = () => {
    getAllBoards()
      .then((boards) => setBoards(boards))
  }
  useEffect(() => { fetchBoards() }, [])

  const fetchCards = (boardId) => {
    getCardsForBoard(boardId)
    .then((cards) => {setCards(cards);})
  }

  const handleSelectBoard = (boardId) => {
    setTargetBoardId(boardId);
    fetchCards(boardId);
  };

  const currentBoard = () => {
    for (let board of boards) {
      if (board.id === targetBoardId) {
        return board;
      }
    }
    return defaultEmptyBoardList[0];
  };

  const handleSubmitBoard = (newBoard) => {
    const postBoardToAPI = (newBoard) => {
      let params = {
        title: newBoard.title,
        owner: newBoard.owner
      }
      return axios.post(`${boardsURL}/boards`, params)
        .then((response) => console.log('Board Posted!', response.data))
        .catch((e) => console.log("Error posting Board!", e.message));
    }
    postBoardToAPI(newBoard)
      .then(() => fetchBoards());
  };

  const handleDeleteBoard = (boardId) => {
    const deleteBoardFromAPI = (boardId) => {
      return axios.delete(`${boardsURL}/boards/${boardId}`)
        .then((response) => console.log('Board Deleted!', response.data))
        .catch((e) => console.log("error deleting board!", e.message));
    }

    deleteBoardFromAPI(boardId)
      .then(() => {
        setTargetBoardId(null);
        fetchBoards()});
  };

  const handleSubmitCard = (newCard) => {
    const postCardToAPI = (newCard) => {
      let params = {
        message: newCard.message,
        likes_count: 0,
        board_id: targetBoardId,
      }
      return axios.post(`${boardsURL}/boards/${targetBoardId}/cards`, params)
        .then((response) => {
          console.log('Card Posted!', response.data)
          return response.data.card.card_id})
        .catch((e) => console.log("error posting card!", e.message));
    };
    const newCardObject = {
      id: null,
      message: newCard.message,
      board: targetBoardId,
      likesCount: 0,
    };
    postCardToAPI(newCardObject)
      .then((nextId) => {
        newCardObject.id = nextId;
        setCards((prevData) => [...prevData, newCardObject]);
      })
  };

  const handleDeleteCard = (cardId) => {
    const deleteCardFromAPI = (cardId) => {
      return axios.delete(`${boardsURL}/boards/${targetBoardId}/cards/${cardId}`)
        .then((response) => console.log('Card Deleted!', response.data))
        .catch((e) => console.log("error deleting card!", e.message));
    };

    deleteCardFromAPI(cardId)
    .then(() => fetchCards(targetBoardId));
  };

  const handleLike = (cardId) => {

    const likeCard = (cardId) => {
    return axios
      .patch(`${boardsURL}/boards/${targetBoardId}/cards/${cardId}/mark_like`)
      .then(res => console.log("Card Liked!", res.data))
      .catch(err => console.log("Error in liking card!", err.message))
    }
    // likeCard(cardId);
    likeCard(cardId).then( () => fetchCards(targetBoardId));
  }

  const toggleBoardDisplay = () => {
    setDisplayBoardForm(!displayBoardForm);
  }

  const toggleBoardButtonText = () => {
    return displayBoardForm ? "Hide" : "Show";
  }

  const handleSortCard = (sortDirection) => {
    setCardDisplaySortDirection(sortDirection);
  }

  return (
    <div className="App">
      <header>
        <h1>MNNJ INSPO BOARD</h1>
      </header>
      <main>
        <div>
          <button onClick={toggleBoardDisplay}>{toggleBoardButtonText()} New Board Form</button>
          {displayBoardForm && <NewBoardForm addBoard={handleSubmitBoard} />}
          <BoardSelectRadio
            boards={boards}
            onBoardSelect={handleSelectBoard}
            selectedBoardId={targetBoardId}
          />
        </div>
        {targetBoardId !== null && (
          <div>
            <Board
              board_id={currentBoard().id}
              title={currentBoard().title}
              owner={currentBoard().owner}
              cards={cards} 
              deleteBoard={handleDeleteBoard}
              handleLike={handleLike}
              deleteCard={handleDeleteCard}
              cardDisplaySortDirection={cardDisplaySortDirection}
              handleSubmitCard={handleSubmitCard}
              />
            <SortCardRadio onSortSelect={handleSortCard} />
            <NewCardForm addCard={handleSubmitCard} />
          </div>
        )}
      </main>
    </div>
  );
};
  
  export default App;
  