import React, { useEffect, useState } from 'react';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import './App.css';
import axios from 'axios';

export const URL = 'http://localhost:5000/boards'

const App = () => {
  const [cards, setCards] = useState([]);
  const [boards, setBoards] = useState([]);
  const [boardData, setBoardData] = useState({
    boardId: '',
    title: '',
    owner: ''
  });
  // const [cards, setCards] = useState([]);
  // const [cardData, setCardData] = useState({
  //   cardId: '',
  //   message: '',
  //   likesCount: 0,
  // })

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

  const updateBoard = (boardID) => {
    return axios
      .patch((`${URL}/${boardID}`))
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

  const addCard = (formField) => {
    axios.post(`http://localhost:5000/cards`)
      .then(response => {
        const createdCard = {
          boardId: response.data.boardId,
          id: response.data.id,
          message: formField.message,
        };
        setCards(prevCards => [...prevCards, createdCard]);
      })
      .catch(error => {
        console.error("Error creating card", error);
      });
      // fetchCards();
  };
  // Cards --------------------------------

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a test </h1>
      </header>
      <main>
        <BoardList boards={boards} updateBoard={updateBoard} deleteBoard={deleteBoard} addCard={addCard}/>
        <NewBoardForm addNewBoard={addNewBoard} />
        <NewCardForm addCard={addCard}/>
      </main>
    </div>
  );
};

export default App;
