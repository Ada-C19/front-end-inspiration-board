import React from 'react'
import "./Card.css"

function Card ({message, id ,likeCount, increaseLikes, deleteCard}) {

    return (
    <div className="card">
        <h3 className="card-message">
            Message: {message}
        </h3>
        <section>
            Likes: {likeCount}
        </section>
        <button className="card-button" onClick={()=> increaseLikes(id)}>+1</button>
        <button className="card-button" onClick ={()=> deleteCard(id)}> Delete </button>
    </div>
    )
}

export default Card;