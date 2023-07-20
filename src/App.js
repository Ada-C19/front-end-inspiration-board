import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import Card from './components/Card';
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

  // initiate state
  const [ boardsData, setBoardsData ] = useState([]);
  const [ selectedBoard, setSelectedBoard ] = useState({
    title: '',
    owner: '',
    board_id: null
  });


  const selectBoard = (board) => { setSelectedBoard(board) };
  // function to display each board in Board Data Base
  const boardElements = boardsData.map((board) => {
    return (<li>
      <BoardList board={board} onSelectBoard={selectBoard}/>
    </li>)
  });
  // we need useEffect to show all current boards in the database on pageload?
  // using useEffect 
  // when loading page, get all current boards in database and then load them
  // args: callback function, array of dependencies (determines whether to rerun the effect)

  useEffect(() => {
    axios.get(`${boardsURL}/boards`)
    .then((response) => {
      setBoardsData(response.data);
    })
  }, []);

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

  return (
    <main className="background-image">
    <div className="App">
      <Popup/>
      <header> 
        <h1 className="header__">Lantern Festival </h1>
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
          <NewBoardForm
            createNewBoard={ createNewBoard }
          />
          <button className='new-board-form__toggle-btn'>Hide Submission form</button>
        </section>
        <section>
          <NewCardForm/>
          <Card/>
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


