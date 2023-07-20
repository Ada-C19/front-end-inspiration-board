import './Card.css';

const Card = props => {

  return(
    <div className='card'>
      <p className='message'>{props.message}</p>
      <p>Likes: {props.likes_count}</p>
      <p>Delete</p>
    </div>
  )
};

export default Card;