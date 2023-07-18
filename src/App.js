import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';



const test_cards = [
  {"message": "hello world",
  "id": 5,
  "likes_count": 6,},
  {"message": "hello computer",
  "id": 6,
  "likes_count": "10000000"}
];

const test_board = {
  cards: test_cards,
}

function App() {
  return (
    <div className="App">
      <p>hello world :)</p>
      <Board board_id={1} owner={"Abby"} title={"tamagotchis i have loved"} cards={test_board.cards}/>
    </div>
  );
}

export default App;
