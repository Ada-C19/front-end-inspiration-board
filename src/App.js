import './App.css';
import React from 'react';
import CardList from './components/CardList'

const cardBoardData = [
  {
    "id": 1,
    "message": "This is a quote",
    "likesCount": 0
  },
  {
    "id": 2,
    "message": "This is a cooler quote",
    "likesCount": 0
  }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <CardList cardBoardData={cardBoardData} />
      </header>
    </div>
  );
}

export default App;
