import React, { useEffect, useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import './App.css';
import axios from 'axios';

export const URL = 'http://localhost:5000/boards'

const App = () => {
  const [boards, setBoards] = useState([]);
  const [boardData, setBoardData] = useState({
    boardId: '',
    title: '',
    owner: ''
  });

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newBoards = response.data.map((board) => ({
          boardId: board.boardId,
          title: board.title,
          owner: board.owner,
        }));
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateBoard = (boardID) => {
    return axios
      .patch((`${URL}/${boardID}`))
      .then(() => {
        const updatedBoardData = response.data
        setBoards((prevBoards) => {
          return prevBoards.map((board) => {
            if (board.boardId === boardID) {
              return {
                ...board, 
                title: updatedBoardData.title, owner: updatedBoardData.owner,
              };
            }
            return board;
          })
        })
      })
      .catch((error) => console.log("cant update board", error));
  }

  const deleteBoard = (boardID) => {
    return axios 
      .delete(`${URL}/${boardID}`)
      .then(() => {
        const newBoards = boards.filter((board) => board.boardId !== boardID);
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewBoard = (formFields) => {
    axios
      .post(URL, formFields)
      .then((response) => {

        const newBoard = {
          boardId: response.data.boardId,
          title: formFields.title,
          owner: formFields.owner,
        };
        setBoards([...boards, newBoard]);
        setBoardData({ title: '', owner: ''});
      })
      .catch((error) => {
        console.error('Error creating board:', error);
      });
  };


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <BoardList boards={boards} updateBoard={updateBoard} deleteBoard={deleteBoard} />
        <NewBoardForm addNewBoard={addNewBoard} />
      </main>
    </div>
  );
};

export default App;
