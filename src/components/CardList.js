import React from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import Card from './Card';

// const CardList = ({ onUpdateCard }) => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/cards')
//       .then(result => {
//         setCards(result.data);
//       })
//       .catch(error => {
//         console.error("Error fetching cards", error);
//       });
//   }, []);

const CardList = (props) => {

  const cardClass = props.showCards ? '' : 'hidden';
  return (
    <ol className={cardClass}>
      {props.cards.map((card) => (
        <Card
        id= {card.id}
        message= {card.message}
        likesCount={card.likesCount}
        onUpdateCard={props.onUpdateCard}
        onDelete={props.handleDelete}
        />
      ))}
    </ol>
  );
};


CardList.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      likesCount: PropTypes.number.isRequired,
    })
  ).isRequired,
  showCards: PropTypes.bool.isRequired,
  // updateCard: PropTypes.func.isRequired,
  // deleteCard: PropTypes.func.isRequired,
  // incrementLikeCount: PropTypes.func.isRequired,
  // decrementLikeCount: PropTypes.func.isRequired,
};

export default CardList;
