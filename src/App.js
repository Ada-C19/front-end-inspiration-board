import React, { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import Board from './components/Board';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import './App.css';
import axios from 'axios';


const App = () => {
  const [boards, setBoards] = useState([]); 
  const [selectedBoard, setSelectedBoard] = useState({});
  // create a state for selected board 
  const [selectedCards, setSelectedCards] = useState([]);
  // create a state for currently selected cards

  useEffect(()=>{ 
    fetchBoardData().then((boardList)=>{setBoards(boardList)})
  },[])

  useEffect(()=>{
    if (selectedBoard.board_id === undefined)
      return ;

    fetchCardData(selectedBoard.board_id).then((boardCards)=>{setSelectedCards(boardCards)})
  }, [selectedBoard])
  


  return (
    <div className="App">
      <BoardList boards={boards} onSelectBoard= {setSelectedBoard}> 
      </BoardList>
      <Board title= {selectedBoard.title} board_id={selectedBoard.board_id}> 
      </Board>
      <CardList cards= {selectedCards}>
      </CardList>
      <NewCardForm onSubmit={handleAddCard} />
    </div>
  );
}


export default App;

const fetchBoardData = () => {
  return (
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
  .then((response) => {return response.data})  
  )
}

const fetchCardData = (board_id) => {
  return (
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`)
  .then((response) => {return response.data})  
  )
}

const handleAddCard = (newMessage) => {
  console.log('New card message:', newMessage);
}