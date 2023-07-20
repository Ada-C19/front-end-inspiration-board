import './Board.css';
import Card from '../Card/Card';
// import PropTypes from 'prop-types'

const Board = props => {
  return(
    <section className='Board'>
      { props.cardData.map((card) => (
        <Card 
          message={card.message}
          likes_count={card.likes_count}
          key={card.id}
          />
          ))
      } 
    </section>
  )
};

export default Board;