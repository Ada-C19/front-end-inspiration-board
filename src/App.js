import './App.css';
import React, { useState } from 'react';
import Board from './components/Board';
import BoardList from './components/BoardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import CardList from './components/CardList';


// ######## Dummy Data ######## 

const boardData = [
  {
  "id": 1,
  "title": "Title 1",
  "owner": "Owner 1",
  },
  {
  "id": 2,
  "title": "Title 2",
  "owner": "Owner 2",
  }
]

const cardData = [
  {
  "id": 1,
  "message": "This is a quote",
  "likesCount": 0,
  "board_id": 1
  },
  {
  "id": 2,
  "message": "This is a cooler quote",
  "likesCount": 0,
  "board_id": 2
  }
]

function App() {
  // console.log(boardData[0]["cards"])
  const [cards, setCards] = useState(cardData)
  const [boardsData, setBoardsData] = useState(boardData)
  const [likes, setLikes] = useState(0)
  const [selectedBoard, setSelectedBoard] = useState(null)
  const [isFormVisible, setIsFormVisible] = useState(true)
  const [selectedBoardTitle, setSelectedBoardTitle] = useState(null);
  
  // ######## Select Board######## 
  // Need to fix this.

  const boardSelect = (id, title, owner) => {
      setSelectedBoard({id, title, owner})
      // console.log("selected board owner", selectedBoard.owner)
      setSelectedBoardTitle(title);
      cardSelect(id)
  }


  // ######## find cards with selected board id ######## 
  const cardSelect = (id) => {
    if (selectedBoard) {
      const findCard = cardData.filter(card => card.board_id === id);
      setCards(findCard);
      console.log('Filtered cards:', findCard);
    } else {
      // Handle the case when no board is selected
      setCards([]);
    }
  };

  // ######## Add new board ######## 

  const addBoard = newBoard => {
    const newBoardList = [...boardsData];
    const nextId = crypto.randomUUID();
    console.log('nextID', nextId)

    newBoardList.push({
      id: nextId,
      title: newBoard.title,
      owner: newBoard.owner
    })
    setBoardsData(newBoardList)
  };

// ######## Add new card ########

  const addCard = newCard => {
    const newCardList = [...cards];
    const nextId = crypto.randomUUID();
    
    newCardList.push({
      id: nextId,
      message: newCard.message,
      likesCount: 0
    })
    setCards(newCardList)
  };

// ######## Delete individual card ######## 

  const deleteCard = id => {
    console.log('click delete')
    setCards(currentCards => {
      const updatedCards =  currentCards.filter(card => card.id !== id);
      return updatedCards
    })
  }

  // ######## Increase Like Count ########

  const increaseLikesCount = id => {
    const updatedCards = cards.map(card => {
      if (card.id == id) {
        return {
          ...card,
          likesCount: card.likesCount + 1
        };
      };
      return card;
    });
    setCards(updatedCards);
  };

  // ######## Toggle Board Form Visibility ########
  const toggleFormVisibility = () => {
    setIsFormVisible(prevState => !prevState);
  };

  return (
    <div className="App grid-container">
      <header className="App-header">
        <h3 className='heading'>Inspiration Board</h3>
      </header>
      <section className='board-list'>
        <h3 className='sect-heading'>Boards</h3>
        <BoardList 
        boardSelect={boardSelect} 
        boardData={boardsData}
        selectedBoard={selectedBoard}
        />
      </section>
      <section className='selected-board'>
        <h3 className='sect-heading'> Selected Board</h3>
        <p>
        {selectedBoard ? `${selectedBoard.title} - ${selectedBoard.owner}` : 'Select a Board from the Board List!'}
      </p>
      </section>
      <section className='board-form'>
        <h3 className='sect-heading'>Create a New Board</h3>
        {isFormVisible && (
        <NewBoardForm
            className='board-input'
            addBoard={addBoard}
          />
        )}
        <button onClick={toggleFormVisibility}>
          {isFormVisible ? 'Hide Form' : 'Show Form'}
        </button>
      </section>
      <section className='cards-list'>
          <section>
            <h3 className='sect-heading'> {selectedBoardTitle} Cards </h3>
          </section>
        {selectedBoard && (
        <Board
          cardData={cards}
          deleteCard={deleteCard}
          increaseLikesCount={increaseLikesCount}
          cardSelect={cardSelect}
        />
        )}
      </section>
      <aside className='card-form'>
        <h3 className='sect-heading'>Create a New Card</h3>
        <NewCardForm 
          addCard={addCard}
        />
      </aside>
    </div>
  );
};

export default App;
