// Board.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';


const Board = ( props ) => {

  const handleUpdateBoard = () => {
    props.updateBoard(props.boardId);
  }

  const handleDeleteBoard = () => {
    console.log(props)
    props.deleteBoard(props.boardId);
  }

  return (
    <li>
      <button onClick={handleUpdateBoard}>EDIT</button>
      <button onClick={handleDeleteBoard}>DELETE</button>
    </li>
  )

};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  updateBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
}

export default Board;


// const Board = ({ id, title, owner }) => {
//   const [cards, setCards] = useState([]);
//   const [showCards, setShowCards] = useState(false);

//   useEffect(() => {
//     if (showCards) {
//       fetchCards();
//     }
//   }, [showCards]);

//   const fetchCards = () => {
//     axios.get(`http://localhost:5000/boards/${id}/cards`)
//       .then(result => {
//         setCards(result.data);
//       })
//       .catch(error => {
//         console.error("Error fetching cards", error);
//       });
//   };

//   const handleBoardClick = () => {
//     setShowCards(prevShowCards => !prevShowCards);
//   };

//   const handleAddCard = () => {
//     const newCard = {
//       message: "New Card",
//       likesCount: 0,
//     };

//     axios.post(`http://localhost:5000/boards/${id}/cards`, newCard)
//       .then(response => {
//         const createdCard = response.data;
//         setCards(prevCards => [...prevCards, createdCard]);
//       })
//       .catch(error => {
//         console.error("Error creating card", error);
//       });
//   };

//   const handleUpdateCard = (updatedCard) => {
//     setCards(prevCards => prevCards.map(card => card.id === updatedCard.id ? updatedCard : card));
//   };

//   return (
//     <div className="board" onClick={handleBoardClick}>
//       <h2>{title}</h2>
//       <p>{owner}</p>
//       {showCards && (
//         <div>
//           <CardList
//             cardData={cards}
//             onUpdateCard={handleUpdateCard}
//           />
//           <button onClick={handleAddCard}>Add Card</button>
//         </div>
//       )}
//       {!showCards && (
//         <button onClick={handleBoardClick}>Show Cards</button>
//       )}
//     </div>
//   );
// };

// Board.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
// };


