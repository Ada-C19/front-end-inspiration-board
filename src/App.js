import logo from './logo.svg';
import './App.css';
import Board from './components/Board/Board';

function App() {
  return (
    <div className="App">
      <p>hello world :)</p>
      <Board board_id={1} owner={"Abby"} title={"tamagotchis i have loved"}/>
    </div>
  );
}

export default App;
