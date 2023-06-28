import React from 'react'
import './App.css';
import BoardList from './components/BoardList';
import Board from './components/Board';
import BoardForm from './components/BoardForm'
import CardForm from './components/CardForm';

const sample_board = [{
    board_id: 1,
    title: "Board1",
    owner: "Owner1" },
  {
    board_id: 2,
    title: "Board2",
    owner: "Owner2"
  }
]
const sample_card =[{
    card_id : 1,
    board_id : 1,
    message : "SampleCard-Board1",
    likes_count: 3, },
    {
      card_id : 4,
      board_id : 1,
      message : "SampleCard-Board1",
      likes_count: 3, },
      {
    card_id : 5,
    board_id : 1,
    message : "SampleCard-Board1",
    likes_count: 3, },
  {
    card_id: 2,
    board_id: 1,
    message: "SampleCard2-Board1",
    likes_count: 1 },
  {
    card_id: 3,
    board_id: 2,
    message: "SampleCard3-Board2",
    likes_count: 3
  }

]

function App() {
  const [boards, setBoards] = React.useState(sample_board)
  const [selectedBoard, setSelectedBoard] = React.useState({})

  const selectBoard = (id) => {
    const matchedBoard = boards.find(board => board.board_id === id)
    setSelectedBoard(matchedBoard)
  }

  const boardList = <BoardList boards={boards} callBack={selectBoard}/>
  return (
    // <div className="App">
    <body className ="App"> 
      <header className="App-header">Inspiration Board</header>
      <section className="container">

        <section className = "element"> {boardList} </section>

        <section className = "element">Create New Board:
          <div className = "board-form">
            <form className='form'>
              <BoardForm /> 
            </form>
          </div>
        </section>

        <section className = "element">Create New Card:
          <div className = "card-form">
              <form className='form'>
                <CardForm /> 
              </form>
            </div>
        </section>
      </section>

      <section> 
        <Board cards = {sample_card} boardsData = {selectedBoard} />
      </section>
    </body>
    // </div>
  );
};

export default App;
