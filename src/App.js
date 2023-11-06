import { useState, useEffect } from 'react';
import axios from 'axios';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import SelectedBoard from './components/SelectedBoard';
import SelectedBoardCardList from './components/SelectedBoardCardList';
import NewCardForm from './components/NewCardForm';
import getResponseError from './errorUtils.js';
import './App.css';


const kBaseUrl = "http://127.0.0.1:5000";

const convertFromApi = (apiBoard) => {
  const { board_id, title, owner } = apiBoard;
  const newBoard = { title, owner, boardId: board_id };
  return newBoard;
};

const getAllBoards = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      console.log("this is response data for get all boards",  response.data);
      return response.data.map(convertFromApi);
    })
    .catch((error) => {
      console.log("this is the error for get all boards:", error);
    });
};

const cardListFromApi = (apiCard) => {
  const { card_id, message, likes_count} = apiCard;
  const newCard = {message, likesCount: likes_count, cardId: card_id};
  return newCard;
};

const getAllCardsOneBoard = (boardId) => {
  return axios
  .get(`${kBaseUrl}/boards/${boardId}/cards`)
  .then((response) => {
    console.log("this is response data for get all cards for one board:", response.data)
    return response.data.map(cardListFromApi);
  })
  .catch((error) => {
    console.log("this is the error for get all cards for one board:", error);
  });
};

const updateLikesCount = (cardId, likeStatus) => {
  const endpoint = likeStatus ? 'increase' : 'decrease';
  return axios
    .patch(`${kBaseUrl}/cards/${cardId}/${endpoint}`)
    .then((response) => {
      const updatedCard = cardListFromApi(response.data);
      console.log("Updated Card:", updatedCard); 
        return updatedCard
    })
    .catch((error) => {
      console.log("this is error for updated card", error);
    });
};

const updateCardMessage = (cardId, data) => {
  return axios
  .patch(`${kBaseUrl}/cards/${cardId}`, data)
  .then((response) => {
    const updatedCard = cardListFromApi(response.data);
    console.log("Updated Card:", updatedCard); 
      return updatedCard
  })
  .catch((error) => {
    console.log("this is error for updated card", error);
  });
}

const deleteCard = (cardId) => {
  return axios 
  .delete(`${kBaseUrl}/cards/${cardId}`)
  .catch((error) => {
    console.log("this is the error for deleting a card:", error)
  });
};

const App = () => {

  const [boardState, setBoardState] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardState, setCardState] = useState([]);
  const [error, setError] = useState(null);

  const fetchBoards = () =>{
    getAllBoards().then((boards)=>{
      console.log("these are the boards:", boards);
      setBoardState(boards);
    })
  }

  useEffect(()=>{
    fetchBoards();
  },[]);

  const findBoardById = (boardId) => {
    return boardState.find((board) => board.boardId === boardId)
  };

  const fetchCards = (boardId) =>{
    getAllCardsOneBoard(boardId).then((cards)=>{
      console.log("these are the cards:", cards);
      setCardState(cards);
    })
  }

  const handleBoardSelection = (boardId) => {
    let board = findBoardById(boardId);
    console.log("FOUND BOARD:", board)
    setSelectedBoard(board);
    fetchCards(boardId);
    console.log("this is the selected board:", selectedBoard)
  };

  const onHandleCardSubmit = (data) => {
    axios.post(`${kBaseUrl}/boards/${selectedBoard.boardId}/cards`, data)
      .then((response) => {
        setCardState((prevCards) => [cardListFromApi(response.data), ...prevCards]);
      })
      .catch((e) => {
        console.log("this is the error for onHandleCardSubmit:", e)
        const errorMessage = getResponseError(e);
        setError(errorMessage);
        console.log('errorMessage:', errorMessage)
      });
  };

  const onHandleBoardSubmit = (data) => {
    axios.post(`${kBaseUrl}/boards`, data)
      .then((response) => {
        setBoardState((prevBoards) => [convertFromApi(response.data.board), ...prevBoards]);
        setError(null);
      })
      .catch((e) => {
        console.log("this is the error for onhandleBoardsubmit:",e);
        const errorMessage = getResponseError(e);
        setError(errorMessage);
        console.log('errorMessage:', errorMessage);
  });
}
  
  const onUnregister = (cardId) => {
    deleteCard(cardId).then(() => {
      setCardState((oldData) => {
        return oldData.filter((card) => card.cardId !== cardId);
      });
    });
  };

  const onLikeCard = (cardId, likeStatus) => {
    updateLikesCount(cardId, likeStatus).then((updatedCard) => {
      setCardState((oldData) => {
        return oldData.map((card) => {
          if (card.cardId === cardId) {
            return updatedCard;
          }
          return card;
        });
      });
    });
  };

  const onUpdateMessage = (cardId, message) => {
    updateCardMessage(cardId, message).then((updatedCard) => {
      setCardState((oldData) => {
        return oldData.map((card) => {
          if (card.cardId === cardId) {
            return updatedCard;
          }
          return card;
        });
      });
    });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <main>
        <section className="Boards-container">
          <div className="Boards-list"><BoardList boardData={boardState} onSelectBoard={handleBoardSelection}></BoardList></div>
          <div className="Selected-board"><SelectedBoard boardState={selectedBoard}></SelectedBoard></div>
          <div className="New-board-form"><NewBoardForm onHandleBoardSubmit={onHandleBoardSubmit} error={error}></NewBoardForm></div>
        </section>
        <section className="Cards-container">
          <div className="Cards-list"><SelectedBoardCardList selectedBoard={selectedBoard} cardList={cardState} onUnregister={onUnregister} onLikeCard={onLikeCard} onUpdateMessage={onUpdateMessage}></SelectedBoardCardList></div>
          {selectedBoard && (<div className="New-card-form"><NewCardForm selectedBoard={selectedBoard} onHandleCardSubmit={onHandleCardSubmit} error={error}></NewCardForm></div>)}
        </section>
      </main>
    </div>
  );
}


export default App;
