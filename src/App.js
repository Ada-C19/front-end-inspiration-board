import React, {useState} from 'react';
import BoardForm from "./components/BoardForm";
import CardForm from './components/CardForm';
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:5000/cards').then((resp)=>{
      setCards(resp.data);
    });
  }, []);

  const deleteBoard = (boardId) => {
    setBoards(boards.filter((board) => board.id !== boardId));
    if (selectedBoard && selectedBoard.id === boardId) {
      setSelectedBoard(null);
    }
  };

  const deleteCard = (cardId) => {
    if (selectedBoard) {
      const updatedBoards = boards.map((board) => {
        if (board.id === selectedBoard.id) {
          const updatedCards = board.cards.filter((card) => card.id !== cardId);
          return { ...board, cards: updatedCards };
        }
        return board;
      });
      setBoards(updatedBoards);
    }
  };
  
  const createCard = (newCardData) => {
    axios
    .post('http://localhost:5000/cards', newCardData)
    .then((response) => {
      const newCards = [...cards];

      newCards.push({
        id: response.data.card_id,
        message: response.data.message,
        board: response.data.board,
        likedCount: response.data.liked_count,
      });

      setCards(newCards);
    })
    .catch((error) => {
      console.log(error)
    });
  };
  
  const createBoard = (newBoardData) => {
    axios
    .post('http://localhost:5000/boards', newBoardData)
    .then((response) => {
      const newBoards = [...boards];

      newBoards.push({
        id: response.data.board_id,
        owner: response.data.owner,
        title: response.data.title,
      });
      setCards(newBoards);
    })
    .catch((error) => {
      console.log(error)
    });
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Inspiration Board</h1>
        {/* Nav Component */}
      </header>
      <main>
        {selectedBoard ? (
          <>
            <h2>{selectedBoard.title}</h2>
            <button onClick={() => setSelectedBoard(null)}>Back to Boards</button>
            <ul>
              {selectedBoard.cards.map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  deleteCard={() => deleteCard(card.id)}
                />
              ))}
            </ul>
            <CardForm createCardCallback={createCard} />
          </>
        ) : (
          <>
            <h2>Boards</h2>
            <button onClick={() => setSelectedBoard({})}>Create New Board</button>
            <ul>
              {boards.map((board) => (
                <li key={board.id}>
                  <button onClick={() => setSelectedBoard(board)}>{board.title}</button>
                  <button onClick={() => deleteBoard(board.id)}>Delete</button>
                </li>
              ))}
            </ul>
            <BoardForm createBoardCallback={createBoard} />
          </>
        )}
      </main>
      <footer>
        <p>© 2023 Elaine, Maz, Hannah, Raina, Angela</p>
      </footer>
    </div>
  );
}

export default App;