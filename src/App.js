import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
// import CardList from './components/CardList';
import NewBoardForm from './components/NewBoardForm';
import BoardList from './components/BoardList';
// import boardInfo from "./util/mock_data.json"

const App = () => {
  const [boardData, setBoardData] = useState([]);
  // using useEffect to retrieve data and set it to boardData;
  // ***** URL(more like backend) probably NEEDS to be checked -- boards don't have an empty cards array *****
  useEffect(() =>{
    const response = axios('https://inspoboardteam404.onrender.com/boards',);
    setBoardData(response.data);
  },[boardData])
  // I must find out if [boardData] works both ways (like if we update our boards here, does it update the database? I feel like it might not... :<)

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


  // Add Board Data
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


/* get all the cards > from the back end : id of the board > get back the board 
> list of cards; you want that in a state > make a function in App.js that
takes in the id of the associated card > send it to the backend;
patch request >> sending back the id
loop through (map) cards >> id == the id of one that was passed in,
increment like count by 1


like react chatlog but needs backend request; */
// and then this wasn't sent to me but incase its helpful for us this is the use state line 

// const [cards, setCard] = React.useState(chatMessages)

// rough draft
// const handleLike = (id) => {
//   setcard(prevcCard => {
//     const updatedCard = prevCard.map(card => {
//       return card.id === id ? {...card, liked: !card.liked} : card
//     })
//     return updatedCard
//   })
// }
// 
  // BoardList & NewBoardForm Components
  return (
    <div id="App">
      <header>
        <h1>
          test
        </h1>
      </header>
      <section className="board-list">
        <BoardList
            boards={boardData}
            onUpdateBoard={updateBoardData}
        />
        <NewBoardForm
            addBoardCallback={addBoardData}
        />
      </section>
      {/* put the button [Create New Board] here in App.js, NOT in Board.js; because that makes it come up in EVERY board. we just want it once on the page */}
    </div>
  );

}


// rough draft
// const handleLike = (id) => {
//   setMessages(prevMessages => {
//     const updatedMessages = prevMessages.map(message => {
//       return message.id === id ? {...message, liked: !message.liked} : message
//     })
//     return updatedMessages
//   })
// }
// 



// const totalLikes = () => {
//   let total = 0;
//   for (let card of cards) {
//     if (card.liked) {total += 1}
//   }
//   return total;
// }



export default App;


