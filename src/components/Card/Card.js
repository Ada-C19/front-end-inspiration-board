import './Card.css';

const Card = props => {
  console.log(props.key)
  return(
    <div className='card'>
      <p className='message'>{props.message}</p>
      <p className='like__button'>🩷</p>
      <p className='likes__count'>Likes: {props.likesCount}</p>
      <p className="delete" onClick={()=> props.onDelete(props.id)}>Delete</p>
    </div>
  )
};

export default Card;