import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import NewCardForm from './NewCardForm';

const CardList = (props) => {
// if we move all of these functions into app.js, how do we pass it ALL down to cardlist then 
//cards and new card form?
// we're only housing these functions here temporarily, this is the sample example layout

    const [cardsData, setCardsData] = useState([]);
    // use state for cards.. what is this?!?!?!
    // what are we populating in cardsData?
    // cards data is an object? that contains cards info? card id, board id, message, likes count?
    // we think cardsData is an object that contains likescount, message, cardID, boardID?

    //how is useeffect working here? this looks like a get request that gets cards for a specific board 
    useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`).then((response)=> {
    setCardsData(response.data);
    }).catch((error) => {
    console.log('Error:', error);
    alert('Couldn\'t get cards for this board.');
    });
}, [props.board]);

    // axios call delete one card, why does the first one have a use effect?
    const deleteCardItem = (card) => {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}`).then((response) => {
    const newCardsData = cardsData.filter((existingCard) => {
        return existingCard.card_id !== card.card_id;
    });
    setCardsData(newCardsData);
    }).catch((error) => {
    console.log('Error:', error);
    alert('Couldn\'t delete the card.');
    });
};

    //this is an update api call that adds a like to a card 
    const plusOneCardItem = (card) => {
    axios.put(`${process.env.REACT_APP_BACKEND_URL}/cards/${card.card_id}/like`).then((response) => {
    const newCardsData = cardsData.map((existingCard) => {
        return existingCard.card_id !== card.card_id ? existingCard : {...card, likes_count: card.likes_count + 1}
      });
      setCardsData(newCardsData);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t +1 the card.');
    });
  };

  // what does this do ?!?!?! 
  const cardElements = cardsData.map((card) => {
    return (<Card
        card={card}
        plusOneCardItem={plusOneCardItem}
        deleteCardItem={deleteCardItem}></Card>)
  });

  // creates a new card to post to a boardID
  const postNewCard = (message) => {
    axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/boards/${props.board.board_id}/cards`,
        {message}
    ).then((response) => {
      const cards = [...cardsData];
      cards.push(response.data.card);
      setCardsData(cards);
    }).catch((error) => {
      console.log('Error:', error);
      alert('Couldn\'t create a new card.');
    });
  };

    return (
        <div>
        <h2>{props.board.owner}'s Cards for {props.board.title}</h2>
        </div>
    );
};


export default CardList;

//create new card  form is in the card list? its a child??? based off the example
//shows all card COMPONENTS
//card list only shows when we click on board title in board component