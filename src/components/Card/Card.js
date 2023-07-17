import './Card.css';

const Card = props => {

  return(
    <div>
      <p>CARD {props.card_id}</p>
      <p>Message: {props.message}</p>
      <p>Likes: {props.likesCount}</p>
      
    </div>
  )
};

export default Card;