import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Board from './components/Board';
import Card from './components/Card';
import CardList from './components/CardList';


const App = () => {

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/cards')
      .then(response => setCardData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  const updateCard = (cardToUpdate) => {
    const cards = cardData.map((card) => {
      if (card.id === cardToUpdate.id) {
        return cardToUpdate;
      }

      return card;
    });

    setCardData(cards);
  };

//   const addCardData = newCard => {

//     const newCardList = [...cardData];

//     newCardList.push({
//         id:,
//         message: newCard.message,
//         likesCount: newCard.likesCount,
//     });

//     setCardData(newCardList);
// };


  return (
    <div className="App">
      <header className="App-header">
        <Board title="My Board" owner="SaySay"/>
        <CardList
          cardData={cardData}
          onUpdateCard={updateCard}
        />
      </header>
    </div>
  );
}

export default App;
