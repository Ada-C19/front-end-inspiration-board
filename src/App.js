import './App.css';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import SelectedBoard from './components/SelectedBoard';
import CardEntry from './components/CardEntry';
import SelectedBoardCardList from './components/SelectedBoardCardList';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';
import { useState, useEffect } from 'react';

const kBaseUrl = "http://127.0.0.1:5000";

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


const App = () => {

  const [boardState, setBoardState] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [cardState, setCardState] = useState([]);

  const findBoardById = (boardId) => {
    return boardState.filter((board) => {return board.boardId === boardId})
  };
  
  const handleBoardSelection = (boardId) => {
    let board = findBoardById(boardId);
    setSelectedBoard(board);
    fetchCards(boardId);
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


  return (
    <div className="App">
      <header className="App-header">
        Inspiration Board
      </header>
      <main>
        <section>
          <BoardList boardData={boardState} onSelectBoard={handleBoardSelection}></BoardList>
          <SelectedBoard boardState={selectedBoard}></SelectedBoard>
          <NewBoardForm></NewBoardForm>
        </section>
        <section>
          <SelectedBoardCardList selectedBoard={selectedBoard} cardList={cardState}></SelectedBoardCardList>
          <NewCardForm onHandleSubmit={onHandleSubmit}></NewCardForm>
          {/* <CardEntry/> */}
        </section>
      </main>
    </div>
  );
}

export default App;
