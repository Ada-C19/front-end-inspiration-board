import './Board.css';
import Card from '../Card/Card';
// import PropTypes from 'prop-types'

const Board = props => {

  return(
    <div>
      <p>hello board :^)</p>
      <p>board id: {props.board_id}</p>
      <p>owner: {props.owner}</p>
      <p>title: {props.title}</p>

      { props.cards.map((card) => (
        <Card 
          message={card.message}
          likes_count={card.likes_count}
          key={card.id}
          />
          ))
      } 


    </div>
  )
};

export default Board;