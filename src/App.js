import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Board from './components/Board';
import Card from './components/Card';


window.axios = axios;

const cardsData = [
  { id: 1, message: 'Card 1', likesCount: 10 },
  { id: 2, message: 'Card 2', likesCount: 5 },
  { id: 3, message: 'Card 3', likesCount: 2 },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Board title="My Board" owner="SaySay" cards={cardsData}/>
      </header>
    </div>
  );
}

export default App;
