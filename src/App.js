import './App.css';
import './components/CardList.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import BoardList from './components/BoardList';
import Popup from './components/Popup.js';


const boardsURL = `${ process.env.REACT_APP_BACKEND_URL }`

function App() {

  const [ boardsData, setBoardsData ] = useState([]);
  const [ selectedBoard, setSelectedBoard ] = useState({
    title: '',
    owner: '',
    board_id: null
  });
  const [cardsData, setCardsData] = useState([]);
  const [cardObject, setCardObject] = useState({
    message: '',
    board_id: null
});

  const selectBoard = (board) => { setSelectedBoard(board) };
  
  const boardElements = boardsData.map((board) => {
    return (<li tabindex='1'>
      <BoardList board={board} onSelectBoard={selectBoard}/>
    </li>)
  });

  useEffect(() => {
    axios.get(`${boardsURL}/boards`)
    .then((response) => {
      setBoardsData(response.data);
    })
  }, []);

  const [ boardFormDisplay, setBoardFormDisplay ] = useState(true);
  const toggleBoardFormDisplay = () => {setBoardFormDisplay(!boardFormDisplay)};

  const createNewBoard = (newBoard) => {
    console.log('on board submission');
    axios
      .post(`${boardsURL}/boards`, newBoard)
      .then((response) => {
        const boards = [...boardsData];
        boards.push(response.data.board);
        setBoardsData(boards);
        setSelectedBoard(response.data.board);
      }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t create a new board')
      });
  };

  const deleteBoard = (selectedBoard) => {
    if (window.confirm('Your wishes will come true! Are you really sure you want to leave the festival, darling sugar plum baby booger?')) {
      axios.delete(`${boardsURL}/boards/${selectedBoard.board_id}`).then((response) => {
      const newBoardsData = boardsData.filter((existingBoard) => {
          return existingBoard.board_id !== selectedBoard.board_id;
      });
      setBoardsData(newBoardsData);
      setSelectedBoard({
        title: '',
        owner: '',
        board_id: null
      });
      }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t delete the board.');
      });
    } 
};

  useEffect(() => {
    axios.get(`${boardsURL}/boards/${selectedBoard.board_id}`).then((response)=> {
    setCardsData(response.data.cards);
    }).catch((error) => {
      if (selectedBoard.board_id) {
        console.log('Error:', error);
        alert('Couldn\'t get cards for this board.'); 
      }
    });
}, [selectedBoard]);

  const deleteCard = (card) => {
    if (window.confirm('Don\'t give up on your wishes! Are you really sure you want to delete this card, sweetie?')) {
      axios.delete(`${boardsURL}/cards/${card.card_id}`).then((response) => {
      const newCardsData = cardsData.filter((existingCard) => {
          return existingCard.card_id !== card.card_id;
      });
      setCardsData(newCardsData);
      }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t delete the card.');
      });
    }
  };

  const addOneLikeToCard = (card) => {
    console.log(`"HERE IS THE CARD:" ${card}`)
    console.log(`"HERE IS THE CARD ID!!!:" ${card.card_id}`)
    console.log(`${boardsURL}/cards/${card.card_id}/add`)

    
    axios.patch(`${boardsURL}/cards/${card.card_id}/add`).then((response) => {
    const newCardsData = cardsData.map((existingCard) => {
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
      });
      setCardsData(newCardsData);
    }).catch((error) => {
      console.log('Error:', error.message);
      alert('Couldn\'t +1 the card.');
    });
  };

  const removeOneLikeToCard = (card) => {
    axios.patch(`${boardsURL}/cards/${card.card_id}/remove`).then((response) => {
    const newCardsData = cardsData.map((existingCard) => {
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count - 1}
      });
      setCardsData(newCardsData);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t -1 the card.');
    });
  };

  const postNewCard = (card) => {
    axios.post(
        `${boardsURL}/cards`,
        card
    ).then((response) => {
      const cards = [...cardsData];
      cards.push(response.data.card);
      setCardsData(cards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new card.');
    });
  };

  const isSubmitDisabled = (value) => {
    return value.length === 0 || value.length > 40;
  };

  return (
    <main className="App">
    <div>
      <Popup/>
      <header> 
        <h1 className="header__">🏮 Lantern Festival </h1>
      </header>
      <body className = "boards__container">

        <section>
          <h1>Participants</h1>
          <ol className='board-list-box'>{boardElements}</ol>
        </section>
        <section className="new-board-form__container">
          <h1>Add new Participant</h1>
          {boardFormDisplay ? <NewBoardForm createNewBoard={ createNewBoard } isSubmitDisabled={isSubmitDisabled}/>: ''}
          <button onClick={toggleBoardFormDisplay} className='new-board-form__toggle-btn'>
            {boardFormDisplay ? 'Hide Submission Form': 'Show Sumbission Form'}
          </button>
        </section>
        <section className='cardslist-container'>
          {selectedBoard.board_id ? <CardList
            cardsData={cardsData}
            addOneLikeToCard={addOneLikeToCard}
            removeOneLikeToCard={removeOneLikeToCard}
            deleteCard={deleteCard}
            selectedBoard={selectedBoard}
            deleteBoard={deleteBoard}
          /> : ''}
        </section>
        <section>
          {selectedBoard.board_id ? <NewCardForm  isSubmitDisabled={isSubmitDisabled} 
                                                  postNewCard={postNewCard} 
                                                  selectedBoard={selectedBoard}
                                                  cardObject={cardObject}
                                                  setCardObject={setCardObject}
                                                  cardsData={cardsData} 
                                                  setCardsData={setCardsData}/> : '' }
        </section>
      </body>
    </div>
    </main>
  );
}

export default App;