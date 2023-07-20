import './Card.css';

const Card = props => {
  console.log(props.key)
  return(
    <div className='card'>
      <p className='message'>{props.message}</p>
      <p>Likes: {props.likesCount}</p>
      <p onClick={()=> props.onDelete(props.id)}>Delete</p>
    </div>
  )
};

export default Card;