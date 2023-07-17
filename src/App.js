import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import Board from './components/Board';

const boardsURL = `${process.env.REACT_APP_BACKEND_URL}`

//axios calls go up here 

function App() {

  //function to update board data goes here? whats the diff?

  //function to add board data goes here
  return (
    <div className="App">
      <header> 
        <h1>Inspiration board </h1>
      </header>
      <body>
        <h1>Boards</h1>
        <h1>Selected  board</h1>
        <h1>Create New board</h1>
        <NewBoardForm
          //props
        />   {/* add board data  goes on this line */} 
        <button>Hide new board form</button>
      </body>

    </div>
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
