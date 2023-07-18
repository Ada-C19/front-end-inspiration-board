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
    axios.get('https://maaps-inspiration-board.onrender.com/boards')
      .then((response) => {
      console.log('response:', response);
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
      .get(`https://maaps-inspiration-board.onrender.com/boards/${id}/cards`)
      .then((response) => {
        setCards(response.data);
        setSelectedBoard({ id, title, owner});
        setSelectedBoardTitle(title);
      })
      .catch((error) => console.log('error:', error));
    return title;
  };

  // ######## Add new board ########

  const addBoard = (newBoard) => {
    axios
      .post('https://maaps-inspiration-board.onrender.com/boards', newBoard)
      .then((response) => {
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
      .post(`https://maaps-inspiration-board.onrender.com/boards/${selectedBoard.id}/cards`, {
        message,
      })
      .then((response) => {
        setCards((prevCards) => [response.data, ...prevCards]);
      })
      .catch((error) => {
        console.log('error:', error);
      });
  };

  // ######## Delete individual card ########

  const deleteCard = (id) => {
    axios.delete(`https://maaps-inspiration-board.onrender.com/cards/${id}`)
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
    axios.delete(`https://maaps-inspiration-board.onrender.com/boards/${selectedBoard.id}`)
      .then(() => {
        setBoardsData((currentBoards) => {
          const updatedBoards = currentBoards.filter((board) => board.board_id !== id);
          return updatedBoards;
        });
      });
  };

  // ######## Increase Like Count ########

  const increaseLikesCount = (id) => {
    axios.put(`https://maaps-inspiration-board.onrender.com/cards/${id}`)
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

  // ####### Sort cards based on id, abc's, like count ########
  const sortCards = (option) => {
    let sortedCards = [...cards];
  
    if (option === 'id') {
      sortedCards.sort((a, b) => a.id - b.id);
    } else if (option === 'alphabetical') {
      sortedCards.sort((a, b) => a.message.localeCompare(b.message));
    } else if (option === 'likes') {
      sortedCards.sort((a, b) => b.likes_count - a.likes_count);
    }
    setCards(sortedCards);
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
        <button className='btn' onClick={toggleFormVisibility}>
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
            sortCards={sortCards}
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
