import React, { useState } from 'react';
import './App.css';
// import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
import boardInfo from "./util/mock_data.json"

const App = () => {
  // boardData State
  const [boardData, setBoardData] = useState(boardInfo);
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
    <div id="App">
      <header>
        <h1>
          test
        </h1>
      </header>
      <section>
        <BoardList
            boards={boardData}
            onUpdateBoard={updateBoardData}
        />
        <NewBoardForm
            addBoardCallback={addBoardData}
        />
      </section>
      {/* put the buttons [Create New Board] here; */}
    </div>
  );

/*  > so to use the likeCard function, you first need to GET the cards from the board.
   >> the getCards helper function uses filter method to get the board 

const getCards =(boardId) => {
  // access the board's cards through board id
  const board = boardData.filter(id => 
    id != boardId)
    // but like filter removes the matching stuff so... idk if this will do
  const cards = board.cards
  return cards
  })
}



const likeCard = () => {
  const cards = getCards();
  let total = 0;
  for (let card of cards) {
    total += card.likes;
  }

  return total;
};

*/



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


