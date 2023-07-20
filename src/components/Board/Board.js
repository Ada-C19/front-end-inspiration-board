import './Board.css';
import Card from '../Card/Card';
// import PropTypes from 'prop-types'

const Board = props => {
  console.log(props.cardData)
  return(
    <section className='Board'>
      { props.cardData.map((card) => (
        <Card 
          message={card.message}
          likesCount={card.likes_count}
          key={card.id}
          id={card.id}
          onLike={props.onLike}
          onDelete={props.onDelete}
          />
          ))
      } 
    </section>
  )
};

export default Board;