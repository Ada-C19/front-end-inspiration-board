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

// Question: should our functions that represent card operations be contained in the App() function, or does it need to live outside of this within App.js?
// how can we refactor to make App() single responsibility, but still initiate props in the same file?
// we're adjusting to be in the same file for now, we will need to refactor
// if we move state withing App(), and we have helper functions outside of App(), would these out of scope of each other?

// helper function
//get all cards and get all boards outside of app? why? because we arent updating state?

function App() {

  // initiating states ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //use selectedBoard state to show cardlist
  const [ boardsData, setBoardsData ] = useState([]);
  const [ selectedBoard, setSelectedBoard ] = useState({
    title: '',
    owner: '',
    board_id: null
  });
  const [cardsData, setCardsData] = useState([]);
  // cards data a list of card objects
  const [cardObject, setCardObject] = useState({
    message: '',
    board_id: null
});

  // board functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const selectBoard = (board) => { setSelectedBoard(board) };
  
  const boardElements = boardsData.map((board) => {
    return (<li>
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

  // whenever we call setBoardFormDisplay, that function should do conditional rendering of BoardForm
  // me thinks: connect to BoardForm within sBFD function

  //function that handles API POST new board call Crud-dy
  // does this need to be accessed by other functions? do we need to use this in something else?
  const createNewBoard = (newBoard) => {
    console.log('on board submission');
    axios
      .post(`${boardsURL}/boards`, newBoard)
      .then((response) => {
        const boards = [...boardsData];
        boards.push(response.data.board);
        setBoardsData(boards);
      }).catch((error) => {
        console.log('Error:', error);
        alert('Couldn\'t create a new board')
      });
  };

  // card list functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // gets cards for a specific board, keeps eye on selected board
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

  // axios call delete one card
  const deleteCard = (card) => {
    axios.delete(`${boardsURL}/cards/${card.card_id}`).then((response) => {
    const newCardsData = cardsData.filter((existingCard) => {
      // mess with conditional later
        return existingCard.card_id !== card.card_id;
    });
    setCardsData(newCardsData);
    }).catch((error) => {
    console.log('Error:', error);
    alert('Couldn\'t delete the card.');
    });
};

  // axios call adds like to a card (we deleted like endpoint)
  //create a helper function fetch cards that 1.calls for the cards and 2.sets state
  //create get all cards function outside of app function?
  const addOneLikeToCard = (card) => {
    console.log(`"HERE IS THE CARD:" ${card}`)
    console.log(`"HERE IS THE CARD ID!!!:" ${card.card_id}`)
    console.log(`${boardsURL}/cards/${card.card_id}/add`)

    
    axios.patch(`${boardsURL}/cards/${card.card_id}/add`).then((response) => {
    const newCardsData = cardsData.map((existingCard) => {
      // this is the same conditional
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
      });
      setCardsData(newCardsData);
    }).catch((error) => {
      console.log('Error:', error.message);
      alert('Couldn\'t +1 the card.');
    });
  };

  // axios call removes like to a card (we deleted like endpoint)
  const removeOneLikeToCard = (card) => {
    axios.patch(`${boardsURL}/cards/${card.card_id}/remove`).then((response) => {
    const newCardsData = cardsData.map((existingCard) => {
      // this is the same conditional
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count - 1}
      });
      setCardsData(newCardsData);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t -1 the card.');
    });
  };

  // axios creates a new card to post to a boardID
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


  // form functions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  const isSubmitDisabled = (value) => {
    return value.length === 0 || value.length > 40;
  };

  // returns ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
        {/* Figure out how to delete the empty H1 w/o collapsing */}
        <section>
          {/* this needs to be empty */}
        </section>
        <section className="new-board-form__container">
          <h1>Add new Participant</h1>
          {boardFormDisplay ? <NewBoardForm createNewBoard={ createNewBoard } isSubmitDisabled={isSubmitDisabled}/>: ''}
          <button onClick={toggleBoardFormDisplay} className='new-board-form__toggle-btn'>
            {boardFormDisplay ? 'Hide Submission Form': 'Show Sumbission Form'}
          </button>
        </section>
        <section className='cardslist-container'>
          {/* <h1>Board for Billy my Brother</h1> */}
          {/* <Card/> */}
          {selectedBoard.board_id ? <CardList
            cardsData={cardsData}
            addOneLikeToCard={addOneLikeToCard}
            removeOneLikeToCard={removeOneLikeToCard}
            deleteCard={deleteCard}
            selectedBoard={selectedBoard}
          /> : ''}
        </section>
        <section>
          {/* Board Title: */}
          {selectedBoard.board_id ? <NewCardForm  isSubmitDisabled={isSubmitDisabled} 
                                                  postNewCard={postNewCard} 
                                                  selectedBoard={selectedBoard}
                                                  cardObject={cardObject}
                                                  setCardObject={setCardObject}
                                                  cardsData={cardsData} 
                                                  setCardsData={setCardsData}/> : '' }
          {/* Add conditional rendering to both NewCardForm and Card so they appear when a Board
          is selected. */}
          {/* We need to be able to click on individual boards and toggle highlights on or off. */}
        </section>
      </body>
    </div>
    </main>
  );
}

export default App;


//all headers wil live here 
//inspiration board is a static header  
//boards header
//selected board
//create new board
//on click board list, cards for board and new card form show up


//states in APP
//boardsData
//selectedBoard
//isBoardFormVisible

//apps will pass these props to board, board and onBoardSelect

//apps will pass these props to new board form: createNewBoard