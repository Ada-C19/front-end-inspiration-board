import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';

function App() {


  // boardData State
  const [boardData, setBoardData] = useState({});
  // updating board data
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

  // Add Board Data Function 
  const addBoardData = newBoard => {
    // Duplicate the boards list
    const newBoardList = [...boardData];
    // Logic to generate the next valid board ID
    const nextId = Math.max(...newBoardList.map(board => board.id)) + 1;

    newBoardList.push({
        id: nextId,
        nameData: newBoard.nameData,
        descData: newBoard.descData,
    });

    setBoardData(newBoardList);
};
// BoardList & NewBoardForm Components
return (
<>
<BoardList
      boards={boardData}
      onUpdateBoard={updateBoardData}
  ></BoardList>
  <NewBoardForm
      addBoardCallback={addBoardData}
  ></NewBoardForm>
</>);

/*
// const getCards =(boardId) => {
  // access the board's cards through board id
  // return <cards>
  // boardData.filter(id => {
    // if id == boardId, return that board;
  // const cards = board.card
  // return cards
  // })
// }
// const likeCard = () => {
//   const cards = getCards();
//   let total = 0;
//   for (let card of cards) {
//     total += card.likes;
//   }

//   return total;
// };




// const totalLikes = () => {
//   let total = 0;
//   for (let card of cards) {
//     if (card.liked) {total += 1}
//   }
//   return total;
// }

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     </header>
  //   </div>
  // );
}

export default App;


