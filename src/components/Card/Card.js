import './Card.css';

const Card = props => {

  return(
    <div id='card'>
      <p>CARD {props.card_id}</p>
      <p>Message: {props.message}</p>
      <p>Likes: {props.likes_count}</p>
      
    </div>
  )
};

export default Card;