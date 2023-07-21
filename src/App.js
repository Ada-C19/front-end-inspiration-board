import React, { useEffect, useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import NewCardForm from './components/NewCardForm';
import './App.css';
import axios from 'axios';

export const URL = 'http://localhost:5000/boards'

const App = () => {
  const [showNewBoardForm, setShowNewBoardForm] = useState(false);
  const [boards, setBoards] = useState([]);
  const [boardData, setBoardData] = useState({
    boardId: 0,
    title: '',
    owner: ''
  });


  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newBoards = response.data.map((board) => ({
          boardId: board.id,
          title: board.title,
          owner: board.owner,
        }));
        setBoards(newBoards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateBoard = (boardID, updatedData) => {
  return axios
    .patch(`${URL}/${boardID}`, updatedData)
    .then((response) => {
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
    .catch((error) => console.log("can't update board", error));
}


  const deleteBoard = (boardId) => {
    axios
      .delete(`http://localhost:5000/boards/${boardId}`)
      .then(() => {
        console.log(boards);
        const newBoards = boards.filter((board) => board.boardId !== boardId);
        setBoards(newBoards);
      })
      .catch(error => {
      });
  };

  const addNewBoard = (formFields) => {
    axios
      .post(URL, formFields)
      .then((response) => {

        const newBoard = {
          boardId: response.data.board.id,
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

  const selectBoard = (boardId, setCards) => {
    for (const board of boards) {
      if (board.boardId === boardId) {
        setBoardData({...board, setCards});
        break;
      }
    }
  }

  const addCard = (formField) => {
    axios.post(`http://localhost:5000/boards/${boardData.boardId}/card`, formField)
      .then(response => {
        const createdCard = {
          boardId: response.data.card.board_id,
          id: response.data.card.id,
          message: response.data.card.message,
          likes_count: response.data.card.likes_count
        };
        boardData.setCards(prevCards => [...prevCards, createdCard]);
      })
      .catch(error => {
        console.error("Error creating card", error);
      });
  };

  const toggleNewBoardForm = () => {
    setShowNewBoardForm((prevValue) => !prevValue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Don't judge me. I'm cute in my own way.</h1>
      </header>
      <main>
        <BoardList boards={boards} updateBoard={updateBoard} deleteBoard={deleteBoard} selectBoard={selectBoard}/>
        {showNewBoardForm && <NewBoardForm addNewBoard={addNewBoard} />}
        <button onClick={toggleNewBoardForm}>
          {showNewBoardForm ? 'Hide New Board Form' : 'Show New Board Form'}
        </button>
        <NewCardForm selectedBoard={boardData} addCard={addCard}/>
      </main>
    </div>
  );
};

export default App;
