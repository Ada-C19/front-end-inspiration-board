import './Board.css';
import Card from '../Card/Card';
import axios from 'axios';
// import PropTypes from 'prop-types'

const Board = props => {
  console.log(props.selectedBoard);
  const getAllCards = () => {
    if (props.selectedBoard.boardId !== null) {
    axios
      .get(`${props.baseUrl}/boards/${props.selectedBoard}/cards`)
      .then((res) => console.log(res.data))
  };
  }
  getAllCards()
  return(
    <div>
      {/* <p>hello board :^)</p>
      <p>board id: {props.board_id}</p>
      <p>owner: {props.owner}</p>
      <p>title: {props.title}</p> */}
      
      {/* { props.cards.map((card) => (
        <Card 
          message={card.message}
          likes_count={card.likes_count}
          key={card.id}
          />
          ))
      }  */}
    </div>
  )
};

export default Board;