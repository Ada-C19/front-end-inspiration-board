import React from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";
import axios from "axios";

const sample_board = [
  {
    board_id: 1,
    title: "Board1",
    owner: "Owner1",
  },
  {
    board_id: 2,
    title: "Board2",
    owner: "Owner2",
  },
];
const sample_card = [
  {
    card_id: 1,
    board_id: 1,
    message: "SampleCard-Board1",
    likes_count: 3,
  },
  {
    card_id: 4,
    board_id: 1,
    message: "SampleCard-Board1",
    likes_count: 3,
  },
  {
    card_id: 5,
    board_id: 1,
    message: "SampleCard-Board1",
    likes_count: 3,
  },
  {
    card_id: 2,
    board_id: 1,
    message: "SampleCard2-Board1",
    likes_count: 1,
  },
  {
    card_id: 3,
    board_id: 2,
    message: "SampleCard3-Board2",
    likes_count: 3,
  },
];

function App() {
  const [boards, setBoards] = React.useState(sample_board);
  const [selectedBoard, setSelectedBoard] = React.useState({});
  const [cards, setCards] = React.useState(sample_card);

  React.useEffect(() => {
    axios
      .get("https://back-end-inspo-rkak.onrender.com/boards")
      .then((response) => {
        setBoards(response.data);
      });
  }, []);

  const increaseLikes = (id) => {
    axios
      .patch(`https://back-end-inspo-rkak.onrender.com/cards/${id}/like`)
      .then((response) => {
        setCards((prevCards) => {
          const updatedCards = prevCards.map((card) => {
            return card.card_id === id ? response.data : card;
          });
          return updatedCards;
        });
      });
  };

  const deleteCard = (id) => { 
    console.log("delete");
    axios
      .delete(`https://back-end-inspo-rkak.onrender.com/cards/${id}`)
      .then(() => {
        setCards((prevCards) => {
          const updatedCards = prevCards.filter((card) => card.card_id !== id);
          return updatedCards;
        });
      });
  };

  const selectBoard = (id) => {
    const matchedBoard = boards.find((board) => board.board_id === id);
    axios
      .get(`https://back-end-inspo-rkak.onrender.com/boards/${id}/cards`)
      .then((response) => {
        setCards(response.data);
      });
    setSelectedBoard(matchedBoard);
  };

  const boardList = <BoardList boards={boards} callBack={selectBoard} />;
  
  const addCard = (newCardData) => {
    
    axios
      .post(`https://back-end-inspo-rkak.onrender.com/boards/${selectedBoard.board_id}/cards`, newCardData)
      .then((response) => {
      
        const newCards = [...cards];
        const nextCardId = response.data["Cards"]["card_id"]
        console.log("nextCardId " + nextCardId)

        console.log("Message: " + response.data["Cards"]["message"])
        newCards.push({
          board_id: selectedBoard.board_id,
          card_id: nextCardId,
          message: response.data.Cards.message,
          likes_count: response.data.Cards.likes_count,
        });

        console.log("newCards " + JSON.stringify(response.data))

        setCards(newCards);
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className="App">
      <header className="App-header">Inspiration Board</header>
      <div className="container">
        <section className="element">
          <h3>Select Your Board:</h3>
          <ol className="board-list">{boardList} </ol>
        </section>

        <section className="element">
          <h3>Create New Board:</h3>
          <div className="board-form-container">
            <BoardForm />
          </div>
        </section>

        <section className="element">
          <h3>Create New Card:</h3>
          <div className="card-form-container">
            <CardForm addCardCallback={addCard} />
          </div>
        </section>

      </div>
        <section>
          <Board
            cards={cards}
            boardsData={selectedBoard}
            increaseLikes={increaseLikes}
            deleteCard={deleteCard}
          />
        </section>

    </div>
  );
}

export default App;
