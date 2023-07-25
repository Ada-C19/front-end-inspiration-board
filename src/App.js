import React, { useState, useEffect } from 'react';
import BoardList from './components/BoardList';
import Board from './components/Board';
import CardList from './components/CardList';
import NewCardForm from './components/NewCardForm';
import './App.css';
import axios from 'axios';


const App = () => {
  const [boards, setBoards] = useState([]); 
  const [selectedBoard, setSelectedBoard] = useState({});
  // create a state for selected board 
  const [selectedCards, setSelectedCards] = useState([]);
  // create a state for currently selected cards

  useEffect(()=>{ 
    fetchBoardData().then((boardList)=>{setBoards(boardList)})
  },[])

  useEffect(()=>{
    if (selectedBoard.board_id === undefined)
      return ;

    fetchCardData(selectedBoard.board_id).then((boardCards)=>{setSelectedCards(boardCards)})
  }, [selectedBoard])
  


  // const handleAddCard = (newMessage) => {
  //   const updatedCards = [...selectedCards];
  //   updatedCards.push(response.data);
  //   setSelectedCards(updatedCards);

// should I rename this function?
  const handleAddCard = (newMessage) => {
    if (!selectedBoard.board_id) 
    return ;
  
    addCardToBoard(selectedBoard.board_id, newMessage)
      .then((newCard) => {
        const updatedCards = [...selectedCards, newCard];
        setSelectedCards(updatedCards);
      })
  }


// const updatedCards = [...selectedCards];
// updatedCards.push(response.data);
// setSelectedCards(updatedCards);

// --- react-chatlog code ---
// const handleLikeCount = (id) => {
//   const copyMessages = [...messages];
//   let newLiked;
//   for (let i = 0; i < copyMessages.length; i++){
//     if (copyMessages[i].id === id){
//       const oneMessage = {...copyMessages[i]}
//       oneMessage.liked = ! oneMessage.liked; 
//       copyMessages[i] = oneMessage;
//       newLiked = oneMessage.liked;
//     }
//   }


  return (
    <div className="App">
      <BoardList boards={boards} onSelectBoard= {setSelectedBoard}> 
      </BoardList>
      <Board title= {selectedBoard.title} board_id={selectedBoard.board_id}> 
      </Board>
      <CardList cards= {selectedCards}>
      </CardList>
      <NewCardForm onSubmit={handleAddCard} />
    </div>
  );
}


export default App;

const fetchBoardData = () => {
  return (
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
  .then((response) => {return response.data})  
  )
}

const fetchCardData = (board_id) => {
  return (
  axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`)
  .then((response) => {return response.data})  
  )
}

// or should I rename this one?
const addCardToBoard = (board_id, newMessage) => {
  return (
  axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${board_id}/cards`, {message: newMessage})
    .then((response)  => {return response.data})
    )
  }

// --- I need to break up this code into two parts ---
// const handleAddCard = (newMessage) => {
//   axios.post(`${process.env.REACT_APP_BACKEND_URL}/boards/${selectedBoard.board_id}/cards`, {message: newMessage})
//     .then((response) => {
//       const updatedCards = [...selectedCards];
//       updatedCards.push(response.data);
//       setSelectedCards(updatedCards);
//     })
// };



// Your handleAddCard is doing two things at the moment.
// * 		It's making the API call (like fetchBoardData), and
// * 		It's acting as callback given to the form, 
// which also needs access to the setter for the card list in order to update the state.

// I'd suggest splitting those two concerns. 
// Leave the API call in a function outside the App component (like the fetch functions), 
// that returns a promise to the new card (in response.data). 

// And move the actual handleAddCard into the App component, 
// like the useEffect functions (but not in an effect). 
// It can make use of the API wrapper to add the card, 
// then perform the spread copy and setting using the result. 
// It will be able to see the current state value and the setter 
// since the function will be within the component scope.