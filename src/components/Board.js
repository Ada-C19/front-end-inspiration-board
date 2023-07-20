import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardList from './CardList';
import axios from 'axios';

const URL = 'http://localhost:5000/'
const Board = ( props ) => {

  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState(false);
  const [newTitle, setNewTitle] = useState(props.title);
  const [newOwner, setNewOwner] = useState(props.owner);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchCards();

  }, []);

  const fetchCards = () => {
    axios
      .get(`${URL}boards/${props.boardId}/cards`)
      .then(result => {
        setCards(result.data);
      })
      .catch(error => {
        console.error("Error fetching cards", error);
      });
  };


  const updateLikeCount = (cardId) => {
    axios
        .put(`${URL}cards/${cardId}/like`)
        .then((response) => {
          setCards((prevCards) => {
            return prevCards.map((card) => {
              if (card.id === cardId) {
                return response.data.card
              } else {
                return card
              }
            })
          })
        })
        .catch((error) => {
          console.error('Error updating like count:', error);
        })
  };

  const deleteCard = ( cardId ) => {
    axios 
      .delete(`${URL}cards/${cardId}`)
      .then(() => {
        const newCards = cards.filter((card) => card.id !== cardId);
        setCards(newCards);
      })
  }
  const handleUpdateBoard = () => {
    const updatedData = {
      title: newTitle,
      owner: newOwner,
    };
    props.updateBoard(props.boardId, updatedData);
    setIsEditing(false);
  }

  const handleDeleteBoard = () => {
    console.log(props)
    props.deleteBoard(props.boardId);
  }

  const handleAddCard = () => {
    props.selectBoard(props.boardId, setCards);
    
}

const handleEditClick = () => {
  setIsEditing(true); 
}

return (
  <>
    <h2>{props.title}</h2>
    <p>{props.owner}</p>
    {isEditing && (
      <>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <input type="text" value={newOwner} onChange={(e) => setNewOwner(e.target.value)} />
        <button onClick={handleUpdateBoard}>Submit</button>
      </>
    )}
    <li>
      <button onClick={() => setShowCards(!showCards)} >Show Cards</button>
      <button onClick={handleAddCard}>Add Card</button>
      <button onClick={handleEditClick}>EDIT</button>
      <button onClick={handleDeleteBoard}>DELETE</button>
    </li>
    <CardList
    cards={cards}
    showCards={showCards}
    onDelete={deleteCard}
    updateLikeCount={updateLikeCount}
    />
  </>
)
};

Board.propTypes = {
  boardId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  updateBoard: PropTypes.func.isRequired,
  deleteBoard: PropTypes.func.isRequired,
  selectBoard: PropTypes.func.isRequired,
}

export default Board;
