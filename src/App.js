import logo from './logo.svg';
import './App.css';

const data = [
  {
    id:1,
    title:"the team",
    owner:"ADA",
  },
  {
    id:2,
    title:"homedepot",
    owner:"tools",
  },
  {
    id:3,
    title:"house",
    owner:"parents",
  }
]

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
      </header>
    </div>
  );
}

export default App;
