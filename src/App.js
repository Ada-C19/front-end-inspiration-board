import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './components/CardList';
// import NewCardForm from './components/NewCardForm';
import BoardList from './components/BoardList';

const App = () => {
  const [boardData, setBoardData] = useState([]);  
  const [errorMessage, setErrorMessage] = useState('');
  const [cardData, setCardData] = useState([]); 
  const [selectedBoard, setSelectedBoard] = useState([])
  const [boardTitle, setBoardTitle] = useState("Select a Board")
  const [boardOwner, setBoardOwner] = useState("")

  console.log(cardData,selectedBoard.board_id)
  const selectBoard = (boardId) => {
    // console.log(boardId)
    axios.get(`https://inspoboardteam404.onrender.com/boards/${boardId}/cards`)
      .then((response) => {
        setSelectedBoard({ board_id: response.data.board_id, title: response.data.title, owner: response.data.owner })
        setCardData(response.data.cards)
        setBoardTitle(response.data.title)
        setBoardOwner(response.data.owner)
        // console.log(response.data)
      })
  }

  const deleteBoard = (boardId) => {
    // console.log(boardId)
    axios.delete(`https://inspoboardteam404.onrender.com/boards/${boardId}`)
    .then(() => {
      setBoardData((prevBoards) => {
				const updatedBoards = prevBoards.filter(
					(board) => board.board_id !== boardId
				);
				return updatedBoards;
			})
    })
  }

  const deleteCard = (cardId) => {
    // console.log(boardId)
    axios.delete(`https://inspoboardteam404.onrender.com/cards/${cardId}`)
    .then(() => {
      setCardData((prevCards) => {
				const updatedCards = prevCards.filter(
					(card) => card.card_id !== cardId
				);
				return updatedCards;
			})
    })
  }
  
  useEffect(() => {
    axios.get('https://inspoboardteam404.onrender.com/boards')
      .then((response) => {
        // console.log(response.data.board)
        setBoardData(response.data);
      })
      .catch((error) => {
        setErrorMessage(<section>{error.response.data.message}</section>);
      });
  }, [])

  // axios patch request; or perhaps this part now works automatically since I'm using useEffect to track [boardData]? idk;
  const updateBoardData = updatedBoard => {
    const boards = boardData.map(board => {
      if (board.id === updatedBoard.id) {
        return updatedBoard;
      } else {
        return board;
      }
    });

    setBoardData(boards);
  };

  // Add Board Data
  const createBoard = (formFields) => {
    axios.post('https://inspoboardteam404.onrender.com/boards', formFields)
      .then(response => {
        // console.log(response.data)
        setBoardData(prevData => {
          // return [response.data.board, ...prevData]     // Add new Board to the top
          return [...prevData, response.data.board]     // Add new Board to the end
        })
    })
};
  
const createCard = (formFields, id) => {
  axios.post(`https://inspoboardteam404.onrender.com/boards/${id}/cards`, formFields)
    .then (response => {
      // console.log("This is our data", response.data)
      setCardData (prevData => {
        return [...prevData, response.data.card]
      })
    })
}

const increaseLikes = (id) => {
  axios.patch(`https://inspoboardteam404.onrender.com/cards/${id}/likes`).then(() => {
    setCardData(prevCards => {
      const updatedCards = prevCards.map(card => {
        return card.card_id === id ? {...card, likes_count: card.likes_count++} : card
      })
      return updatedCards
    })
  })
};


return (
  <div id="App">
      <div className="sidebar">
        <section className="board-list">
          <BoardList
          boards={boardData}
          onUpdateBoard={updateBoardData}
          selectBoard={selectBoard}
          deleteBoard={deleteBoard}
          createBoard={createBoard}
    
          />
        </section>
      </div>

      <div className="main-container">
        <header className="header">
          <h1>{boardTitle}</h1>
          <p>{boardOwner}</p>
        </header>
        <div className="content">
          <CardList 
          selectBoard={selectBoard} 
          cards={cardData} 
          likeCard={increaseLikes} 
          createCard={createCard}
          boardId={selectedBoard.board_id} 
          deleteCard={deleteCard}
          increaseLikes={increaseLikes}
          />
        </div>
      </div>
  </div>
  );
  
}



          
          
export default App;
