import React, { useEffect, useState } from "react";
import Board from "./components/BoardComp/Board";
import BoardList from "./components/BoardListComp/BoardList";
import { getAllBoards, postBoard } from "./api/BoardsRequests";
import "./App.css";

function App() {
  const [boards, setBoards] = useState([]);
  const [boardID, setBoardID] = useState();

  const onSelectBoard = (id) => {
    setBoardID(id);
  };

  const refetchBoards = async () => {
    const retrieveBoards = await getAllBoards();
    setBoards(retrieveBoards);
  };

  useEffect(() => {
    refetchBoards();
  }, []);

  const onBoardFormSubmit = (newBoard) => {
    postBoard(newBoard).then((response) => {
      setBoards((prev) => [...prev, response]);
    });
  };

  return (
    <div className="App">
      <header className="App__header">
        <h1 className="Inspo__board__text">Inspiration Board</h1>
      </header>
      <main>
        <div id="sidebar">
          <BoardList
            key={boardID}
            boards={boards}
            onSelectBoard={onSelectBoard}
            refetchBoards={refetchBoards}
            onBoardFormSubmit={onBoardFormSubmit}
          />
        </div>
        <div id="content">
          <Board
            key={boardID}
            boardID={boardID}
            refetchBoards={refetchBoards}
          />
        </div>
      </main>
      {/* <footer className="App__footer">
        <div>
          &copy; 2023 Alejandra Dominguez, Angie Tran, Cindy Vides, Danica
          Sarmiento
        </div>
      </footer> */}
    </div>
  );
}

export default App;
