import React from 'react';
import PropTypes from "prop-types";
import './Cards.css'

const Cards = (props) => {
    return (
        <div className='card-frame'>
          <section>{props.message}</section>

          <button className="card-like" onClick={()=> props.likeCard(props.id)} >+1💕 {props.likes} </button>
          <button className="delete" >delete</button>
        </div>
        );
}


Cards.propTypes = {
    id:PropTypes.number.isRequired,
    message:PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    likeCard: PropTypes.func
}

export default Cards;
