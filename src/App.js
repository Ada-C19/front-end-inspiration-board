import './App.css';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import SelectedBoard from './components/SelectedBoard';
import SelectedBoardCardList from './components/SelectedBoardCardList';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';
import { useState, useEffect } from 'react';

const kBaseUrl = "https://inspo-board-api-019p.onrender.com";

const getAllBoards = () => {
  return axios
    .get(`${kBaseUrl}/boards`)
    .then((response) => {
      console.log(response.data);
      return response.data.map(convertFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

const convertFromApi = (apiBoard) => {
  const { board_id, title, owner } = apiBoard;
  const newBoard = { title, owner, boardId: board_id };
  return newBoard;
};

const getAllCardsOneBoard = (boardId) => {
  return axios
    .get(`${kBaseUrl}/boards/${boardId}/cards`)
    .then((response) => {
      console.log(response.data)
      return response.data.map(cardListFromApi);
    })
    .catch((error) => {
      console.log(error);
    });
};

const cardListFromApi = (apiCard) => {
    const { card_id, message, likes_count} = apiCard;
    const newCard = {message, likesCount: likes_count, cardId: card_id};
    return newCard;
};

const deleteCard = (cardId) => {
  return axios 
  .delete(`${kBaseUrl}/cards/${cardId}`)
  .catch((error) => {
    console.log(error)
  });
};

const updateLikesCount = (cardId) => {
  return axios
    .patch(`${kBaseUrl}/cards/${cardId}/like`)
    .then((response) => {
      const updatedCard = cardListFromApi(response.data);
      console.log("Updated Card:", updatedCard); 
        return updatedCard
    })
    .catch((error) => {
      console.log(error);
    });
};

const App = () => {

  const [boardState, setBoardState] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardState, setCardState] = useState([]);

  const findBoardById = (boardId) => {
    return boardState.find((board) => {return board.boardId === boardId})
  };
  
  const handleBoardSelection = (boardId) => {
    let board = findBoardById(boardId);
    setSelectedBoard(board);
    fetchCards(boardId);
    console.log(selectedBoard)
  };

  const fetchBoards = () =>{
    getAllBoards().then((boards)=>{
      console.log(boards);
      setBoardState(boards);
    })
  }

  const fetchCards = (boardId) =>{
    getAllCardsOneBoard(boardId).then((cards)=>{
      console.log(cards);
      setCardState(cards);
    })
  }

  useEffect(()=>{
    fetchBoards();
  },[]);

  const onHandleSubmit = (data) => {
    axios.post(`${kBaseUrl}/boards/${selectedBoard.boardId}/cards`, data)
      .then((response) => {
        setCardState((prevCards) => [cardListFromApi(response.data), ...prevCards]);
      })
      .catch((e) => console.log(e));
  };

  const onHandleBoardSubmit = (data) => {
    axios.post(`${kBaseUrl}/boards`, data)
      .then((response) => {
        setBoardState((prevBoards) => [convertFromApi(response.data.board), ...prevBoards]);
      })
      .catch((e) => console.log(e));
  };

  const onUnregister = (cardId) => {
    deleteCard(cardId).then(() => {
      setCardState((oldData) => {
        return oldData.filter((card) => card.cardId !== cardId);
      });
    });
  };

  const onLikeCard = (cardId) => {
    updateLikesCount(cardId).then((updatedCard) => {
      setCardState((prevCard) => {
        return prevCard.map((card) => {
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
          <div className="New-board-form"><NewBoardForm onHandleBoardSubmit={onHandleBoardSubmit}></NewBoardForm></div>
        </section>
        <section className="Cards-container">
          <div className="Cards-list"><SelectedBoardCardList selectedBoard={selectedBoard} cardList={cardState} onUnregister={onUnregister} onLikeCard = {onLikeCard}></SelectedBoardCardList></div>
          <div className="New-card-form"><NewCardForm selectedBoard={selectedBoard} onHandleSubmit={onHandleSubmit}></NewCardForm></div>
        </section>
      </main>
    </div>
  );
}

export default App;
