import './Card.css';

const Card = props => {

  return(
    <div id='card'>
      <p>{props.message}</p>
      <p>Likes: {props.likes_count}</p>
      
    </div>
  )
};

export default Card;