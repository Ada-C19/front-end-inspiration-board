import './App.css';
import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import axios from 'axios';

function App() {
  const [cards, setCards] = useState([]);
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [selectedBoardTitle, setSelectedBoardTitle] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/boards').then((response) => {
      console.log('response:', response);
      // const newBoard = response.data.map(board => {
      //   console.log('board appjs:', board)
      //   return {
      //     board_id: board.board_id,
      //     title: board.title,
      //     owner: board.owner
      //   };
      // });
      // console.log('newBoard:', newBoard)
      setBoardsData(response.data);
    })
  }, []);

  // ######## Select Board########

  const boardSelect = (id, title, owner) => {
    // setSelectedBoard({id, title, owner})
    // console.log("selected board owner", selectedBoard.owner)
    // setSelectedBoardTitle(title);
    // cardSelect(id)
    console.log('boardSelect id:', id)
    axios
      .get(`http://localhost:5000/boards/${id}/cards`)
      .then((response) => {
        setCards(response.data);
        setSelectedBoard({ id});
        setSelectedBoardTitle(title);
      })
      .catch((error) => console.log('error:', error));
    return title;
  };

  // ######## Add new board ########

  const addBoard = (newBoard) => {
    console.log('newBoard in addBoard:', newBoard)
    axios
      .post('http://localhost:5000/boards', newBoard)
      .then((response) => {
        console.log('response add board:', response)
        // const newBoardList = [response.data, ...boardsData];

        // newBoardList.push({
        //   board_id: response.data.board_id,
        //   title: response.data.title,
        //   owner: response.data.owner
        // })
        setBoardsData((prevBoardList) => [response.data, ...prevBoardList])
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  // ######## Add new card ########

  const addCard = (message) => {
    console.log('message in addBoard:', message)
    axios
      .post(`http://localhost:5000/boards/${selectedBoard.id}/cards`, {
        message,
      })
      .then((response) => {
        // const newCardList = [...cards];

        //   newCardList.push({
        //     message: response.data.message,
        //     likesCount: 0,
        //     card_id: response.data.card_id,
        //     board_id: response.data.board_id
        //   })
        setCards((prevCards) => [response.data, ...prevCards]);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  // ######## Delete individual card ########

  const deleteCard = (id) => {
    axios.delete(`http://localhost:5000/cards/${id}`)
      .then(() => {
      console.log('click delete');
      // setCards(prevCards => {
      //   return prevCards.filter(card => card.card_id !== id)
      // })
      setCards((currentCards) => {
        const updatedCards = currentCards.filter((card) => card.card_id !== id);
        return updatedCards;
      });
    });
  };

  // ######## Delete Individual Board ########

  const deleteBoard  = (id) => {
    axios.delete(`http://localhost:5000/boards/${selectedBoard.id}`)
      .then(() => {
        setBoardsData((currentBoards) => {
          const updatedBoards = currentBoards.filter((board) => board.board_id !== id);
          return updatedBoards;
        });
      });
  };

  // ######## Increase Like Count ########

  const increaseLikesCount = (id) => {
    axios.put(`http://localhost:5000/cards/${id}`)
    .then(() => {
      const updatedCards = cards.map(card => {
        if (card.card_id == id) {
          return {
            ...card,
            likes_count: card.likes_count + 1,
          };
        }
        return card;
      });
      setCards(updatedCards);
    })
  };

  // ######## Toggle Board Form Visibility ########
  const toggleFormVisibility = () => {
    setIsFormVisible((prevState) => !prevState);
  };

  return (
    <div className="App grid-container">
      <header className="App-header">
        <h3 className="heading">Inspiration Board</h3>
      </header>
      <section className="board-list">
        <h3 className="sect-heading">Boards</h3>
        <BoardList
          boardSelect={boardSelect}
          boardData={boardsData}
          selectedBoard={selectedBoard}
        />
      </section>
      <section className="selected-board">
        <h3 className="sect-heading"> Selected Board</h3>
        <p>
          {selectedBoard
            ? `${selectedBoard.title} - ${selectedBoard.owner}`
            : 'Select a Board from the Board List!'}
        </p>
        <button onClick={() => deleteBoard(selectedBoard.id)}>
          Delete
        </button>
      </section>
      <section className="board-form">
        <h3 className="sect-heading">Create a New Board</h3>
        {isFormVisible && (
          <NewBoardForm className="board-input" addBoard={addBoard} />
        )}
        <button onClick={toggleFormVisibility}>
          {isFormVisible ? 'Hide Form' : 'Show Form'}
        </button>
      </section>
      <section className="cards-list">
        <section>
          <h3 className="sect-heading"> {selectedBoardTitle} Cards </h3>
        </section>
        {selectedBoard && (
          <Board
            cardData={cards}
            deleteCard={deleteCard}
            increaseLikesCount={increaseLikesCount}
            // cardSelect={cardSelect}
          />
        )}
      </section>
      <aside className="card-form">
        <h3 className="sect-heading">Create a New Card</h3>
        <NewCardForm addCard={addCard} />
      </aside>
    </div>
  );
}

export default App;
