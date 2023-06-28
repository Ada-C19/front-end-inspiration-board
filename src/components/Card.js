import React from 'react'
// import PropTypes from 'prop-types'
import "./Card.css"

function Card ({message, id ,likeCount, increaseLikes}) {
    // const [updateCount, setUpdateCount] = React.useState({likeCount})

    return (
    <div className="card">
        <h3 className="card-message">
            Message: {message}
        </h3>
        <section>
            Likes: {likeCount}
        </section>
        <button className="card-button" onClick={()=> increaseLikes(id)}>+1</button>
        <button className="card-button"> Delete </button>
    </div>
    )
}

// Card.PropTypes = {
//     //fill in proptypes
//     //cardData
// }

// Card.propTypes = {
//     cardData: ropTypes.object.isRequired(
//         PropTypes.shape({
//             message: PropTypes.string.isRequired,
//             likeCount: PropTypes.number.isRequired
//         }))
//     };

export default Card;