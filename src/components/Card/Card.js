import './Card.css';

const Card = props => {
  console.log(props.key)
  const buttonContent = props.likesCount > 0 ? '💖' : '🩷';
  return(
    <div className='card'>
      <p className='message'>{props.message}</p>
      <p onClick={()=> props.onLike(props.id)} className='like__button'>{buttonContent}</p>
      <p className='likes__count'>Likes: {props.likesCount}</p>
      <p className="delete" onClick={()=> props.onDelete(props.id)}>Delete</p>
    </div>
  )
};

export default Card;