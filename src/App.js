import React from "react";
import "./App.css";
import BoardList from "./components/BoardList";
import Board from "./components/Board";
import BoardForm from "./components/BoardForm";
import CardForm from "./components/CardForm";
import axios from "axios";

function App() {
  const [boards, setBoards] = React.useState([]);
  const [selectedBoard, setSelectedBoard] = React.useState({});
  const [cards, setCards] = React.useState([]);

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

  const deleteBoard = (id) => { 
    console.log("delete");
    axios
      .delete(`https://back-end-inspo-rkak.onrender.com/boards/${id}`)
      .then(() => {
        setBoards((prevBoards) => {
          const updatedBoards = prevBoards.filter((board) => board.board_id !== id);
          return updatedBoards;
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

  const addBoard = (newBoardData) => {

    if (newBoardData.title.length === 0) {
      alert("Please enter a title!")
      return 
    }
    if (newBoardData.owner.length === 0) {
      alert("Please enter an owner!")
      return 
    }
  
    axios
    .post(`https://back-end-inspo-rkak.onrender.com/boards`, newBoardData)
    .then((response) => {
      const newBoard = response.data.Boards;
      setBoards((prevBoards) => [...prevBoards, newBoard]);
      console.log(response.data);
      console.log("newBoards " + JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });      
  };
  

  const boardList = <BoardList boards={boards} callBack={selectBoard} addBoardCallback={addBoard} />;

  const addCard = (newCardData) => {

    if (selectedBoard.board_id === undefined) {
      alert("Please select a board to create card!")
      return 
    }
    if (newCardData.message.length === 0) {
      alert("Please enter a message!")
      return 
    }
    if (newCardData.message.length >= 40) {
      alert("Message must be less than 40 characters!")
      return 
    }

    axios
      .post(`https://back-end-inspo-rkak.onrender.com/boards/${selectedBoard.board_id}/cards`, newCardData)
      .then((response) => {
      
        const newCards = [...cards];
        const nextCardId = response.data["Cards"]["card_id"]
        

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
            <BoardForm addBoardCallback={addBoard}/>
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
            deleteBoard={deleteBoard}
            deleteCard={deleteCard}
          />
        </section>

    </div>
  );
}

export default App;
