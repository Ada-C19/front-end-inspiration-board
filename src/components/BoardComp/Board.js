import React from "react";
import { useState, useEffect } from "react";
import { getCards, postCard } from "../../api/CardsRequests";
import Card from "./Card";
import { deleteOneBoard, getOneBoard } from "../../api/BoardsRequests";
import "./Board.css";
import NewCardForm from "./NewCardForm";

const Board = ({ boardID, refetchBoards }) => {
  const [cards, setCards] = useState([]);
  const [board, setBoard] = useState({});
  const [showForm, setShowForm] = useState(false);

  const refetchCards = async () => {
    const retrievecards = await getCards(boardID);
    setCards(retrievecards);
  };

  const fetchBoard = async () => {
    const selectedBoard = await getOneBoard(boardID);
    setBoard(selectedBoard);
  };

  const onDelete = () => {
    deleteOneBoard(boardID).then(() => {
      refetchBoards();
      setCards([]);
      setBoard({});
      setShowForm(false);
    });
  };

  useEffect(() => {
    if (boardID) {
      fetchBoard();
      refetchCards();
      setShowForm(true);
    }
  }, [boardID]);

  const onCardFormSubmit = (newCard) => {
    postCard(newCard, boardID).then((response) => {
      setCards((prev) => [...prev, response]);
    });
  };

  const handleSortCards = (value) => {
    if(value === 'likes_count'){
      return [...cards.sort((card1, card2) => {
        if (card1[value] === card2[value]) return 0
        else if (card1[value] < card2[value]) return 1
        else return -1
      })]
    }
    return[...cards.sort((card1, card2) => {
      if (card1[value] === card2[value]) return 0
      else if (card1[value] > card2[value]) return 1
      else return -1
    })]
  }

  const sortCards = (value) => {
    const sortedCards = handleSortCards(value)
    setCards(sortedCards)
  }

  const boardExists = Object.keys(board).length > 0
  return (
    <section className="board">
      <div> 
        {boardExists && (
          <select className="select-sort-cards" 
            onChange={(event) => sortCards(event.target.value)}>
            <option value="card_id">ID</option>
            <option value="message">Message</option>
            <option value="likes_count">Likes</option>
          </select>)}
        </div>
      <div>
        {boardExists && ( 
        <h3 className="sort-cards">sort cards by:</h3>)}
      </div> 
      <div>
        {boardExists > 0 && (
          <button className="delete-board" onClick={onDelete}>X</button>)}
      </div>
      <h2 className="board-text-title">{board?.title}</h2>
      <div className="board-container">
        <ul className="ul-cards">
          {cards &&
            cards.map((card) => (
              <Card
                key={card.card_id}
                id={card.card_id}
                message={card.message}
                likesCount={card.likes_count}
                refetchCards={refetchCards}
              />
            ))}
          {showForm && <NewCardForm onCardFormSubmit={onCardFormSubmit} />}
        </ul>
      </div>
      <h2 className="board-text-owner">{board?.owner}</h2>
    </section>
  );
};

export default Board;
