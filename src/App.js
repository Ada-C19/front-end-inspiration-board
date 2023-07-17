import './App.css';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
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

const App = () => {

  const [boardState, setBoardState] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState([]);

  const fetchBoards = () =>{
    getAllBoards().then((boards)=>{
      console.log(boards);
      setBoardState(boards);
    })
  }

  useEffect(()=>{
    fetchBoards();
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        Inspiration Board
      </header>
      <main>
        <section>
          <BoardList boardData={boardState}></BoardList>
          <NewBoardForm></NewBoardForm>
        </section>
        <section>
          <SelectedBoardCardList></SelectedBoardCardList>
          <NewCardForm></NewCardForm>
        </section>
      </main>
    </div>
  );
}

export default App;
