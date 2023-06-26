import './App.css';
import CardList from './components/CardList';
import cardData from './data/cards.json';
import React, { useState } from 'react';

// use ${process.env.REACT_APP_BACKEND_URL} to make API calls


const App = () => {
  const [cards, setCards] = useState(cardData);

  const handleLike = id => {
    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (id === card.id) {
          return {...card, likesCount: card.likesCount + 1};
        } else {
          return card;
        };
      })
    })
  }

  return (
    <div className="App">
      <header>
        <h1>MMNJ INSPO BOARD</h1>
      </header>
      <CardList cards={cards} onClick={handleLike}/>
    </div>
  );
}

export default App;
